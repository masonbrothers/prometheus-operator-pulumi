import * as pulumi from "@pulumi/pulumi";
import { ServiceMonitor } from "../monitoring/v1/serviceMonitor";
import { describe, expect, it } from "vitest";

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

describe("generated Prometheus Operator CRD resources", () => {
  it("constructs a typed ServiceMonitor with generated API defaults", async () => {
    const serviceMonitor = new ServiceMonitor("api", {
      metadata: {
        name: "api",
      },
      spec: {
        endpoints: [
          {
            port: "http",
          },
        ],
        selector: {
          matchLabels: {
            app: "api",
          },
        },
      },
    });

    expect(ServiceMonitor.isInstance(serviceMonitor)).toBe(true);
    expect(ServiceMonitor.__pulumiType).toBe(
      "kubernetes:monitoring.coreos.com/v1:ServiceMonitor",
    );
    await expect(outputValue(serviceMonitor.apiVersion)).resolves.toBe(
      "monitoring.coreos.com/v1",
    );
    await expect(outputValue(serviceMonitor.kind)).resolves.toBe("ServiceMonitor");
    await expect(outputValue(serviceMonitor.metadata)).resolves.toMatchObject({
      name: "api",
    });
  });
});

async function outputValue<T>(output: pulumi.Output<T>): Promise<T> {
  return (output as unknown as { promise: () => Promise<T> }).promise();
}
