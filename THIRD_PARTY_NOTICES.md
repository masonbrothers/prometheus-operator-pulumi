# Third Party Notices

This package includes Kubernetes CustomResourceDefinition YAML copied from
Prometheus Operator and TypeScript bindings generated from those CRDs with
`crd2pulumi`.

Upstream project: https://github.com/prometheus-operator/prometheus-operator
Upstream version: `v0.91.0`
Upstream license: Apache-2.0
License text: `THIRD_PARTY_LICENSES/APACHE-2.0.txt`

Bundled source files:

- `https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/v0.91.0/example/prometheus-operator-crd/monitoring.coreos.com_alertmanagerconfigs.yaml`
- `https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/v0.91.0/example/prometheus-operator-crd/monitoring.coreos.com_alertmanagers.yaml`
- `https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/v0.91.0/example/prometheus-operator-crd/monitoring.coreos.com_podmonitors.yaml`
- `https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/v0.91.0/example/prometheus-operator-crd/monitoring.coreos.com_probes.yaml`
- `https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/v0.91.0/example/prometheus-operator-crd/monitoring.coreos.com_prometheusagents.yaml`
- `https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/v0.91.0/example/prometheus-operator-crd/monitoring.coreos.com_prometheuses.yaml`
- `https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/v0.91.0/example/prometheus-operator-crd/monitoring.coreos.com_prometheusrules.yaml`
- `https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/v0.91.0/example/prometheus-operator-crd/monitoring.coreos.com_scrapeconfigs.yaml`
- `https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/v0.91.0/example/prometheus-operator-crd/monitoring.coreos.com_servicemonitors.yaml`
- `https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/v0.91.0/example/prometheus-operator-crd/monitoring.coreos.com_thanosrulers.yaml`

Changes made in this package:

- CRD YAML is copied into `crds/` with generated source/version headers.
- TypeScript Pulumi resources are generated from the CRD schemas.
- Generated TypeScript is normalized for provider tokens and trailing whitespace.

Upstream NOTICE:

CoreOS Project
Copyright 2015 CoreOS, Inc

This product includes software developed at CoreOS, Inc.
(http://www.coreos.com/).
