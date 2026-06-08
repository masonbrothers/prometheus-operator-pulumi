const assert = require("node:assert/strict");
const pulumi = require("@pulumi/pulumi");
const prometheus = require("../dist/index.js");

pulumi.runtime.setMocks(
  {
    call: (args) => args.inputs,
    newResource: (args) => ({
      id: `${args.name}_id`,
      state: args.inputs,
    }),
  },
  "project",
  "stack",
  false,
);

async function main() {
  const serviceMonitor = new prometheus.monitoring.v1.ServiceMonitor("api", {
    metadata: { name: "api" },
    spec: {
      endpoints: [{ port: "http" }],
      selector: {
        matchLabels: { app: "api" },
      },
    },
  });

  assert.equal(prometheus.monitoring.v1.ServiceMonitor.isInstance(serviceMonitor), true);
  assert.equal(await serviceMonitor.apiVersion.promise(), "monitoring.coreos.com/v1");
  assert.equal(await serviceMonitor.kind.promise(), "ServiceMonitor");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
