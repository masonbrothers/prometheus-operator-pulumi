const version = "v0.91.0";
const baseUrl = `https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/${version}/example/prometheus-operator-crd`;

const crdNames = [
  "alertmanagerconfigs",
  "alertmanagers",
  "podmonitors",
  "probes",
  "prometheusagents",
  "prometheuses",
  "prometheusrules",
  "scrapeconfigs",
  "servicemonitors",
  "thanosrulers",
];

export default {
  cleanEntries: [
    "monitoring",
  ],
  sources: crdNames.map((crdName) => ({
    name: `prometheus-operator-${crdName}`,
    version,
    url: `${baseUrl}/monitoring.coreos.com_${crdName}.yaml`,
  })),
};
