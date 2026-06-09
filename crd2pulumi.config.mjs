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
  downloadTimeoutMs: 30000,
  sources: crdNames.map((crdName) => ({
    name: `prometheus-operator-${crdName}`,
    sha256: {
      alertmanagerconfigs: "3207a39dd76ef30a672250bcef7ee1514614ed8a1529a8024d3da9e86f482d7e",
      alertmanagers: "8c98194c07e1b149b978f5b73e1f8375efaf735623e5bace83bb67c3b88511b7",
      podmonitors: "7683ec64aee3b072f46ec7c56cf553e4023fdcb48bdfe75d21a44d91933be92f",
      probes: "e2692ccf8adaf43c67fce19f13584f680150e89506085c437f9f140fbe3f7932",
      prometheusagents: "72736cddc21cf0a8de921454da42683aec07d901e477b6d25375f96878d0c710",
      prometheuses: "1dd1d52fc08c9d4719cd871636623beae404595596fb764cb3a30e32bb786da5",
      prometheusrules: "abb664c571f88a76fb81160e30a8961696f74fdb86ab8be15c903eb4c3329830",
      scrapeconfigs: "8b78d8234f2125c0d07663eac5a7c5297129f0c17145e7d20868c96522608086",
      servicemonitors: "4c8e9b3727e2a04a1dacbadeb5cbc692cbe51d5f9e0a93eb91b473bf8845faa0",
      thanosrulers: "117af1e3ee4b2f25dabe9a89492a4ef76b8b6ee2852ec59cd8c6f2522b75c84d",
    }[crdName],
    version,
    url: `${baseUrl}/monitoring.coreos.com_${crdName}.yaml`,
  })),
};
