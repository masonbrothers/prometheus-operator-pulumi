# prometheus-operator-pulumi

Pulumi TypeScript bindings for Prometheus Operator CRDs generated with
`crd2pulumi`.

This package is generated from a pinned Prometheus Operator release. It is
useful for typed Pulumi resources such as `ServiceMonitor`, `PodMonitor`,
`PrometheusRule`, `Prometheus`, `Alertmanager`, `Probe`, and `ScrapeConfig`.

## Install

```sh
npm install prometheus-operator-pulumi @pulumi/kubernetes @pulumi/pulumi
```

## Example

```ts
import { monitoring } from "prometheus-operator-pulumi";

new monitoring.v1.ServiceMonitor("api", {
  metadata: {
    name: "api",
    namespace: "monitoring",
  },
  spec: {
    selector: {
      matchLabels: {
        app: "api",
      },
    },
    endpoints: [
      {
        port: "http",
      },
    ],
  },
});
```

## Generate

```sh
pnpm generate:crds
```

The CRDs currently come from Prometheus Operator `v0.91.0`.

Local regeneration uses the shared `crd2pulumi-package-tools` package installed
by `pnpm install`; `crd2pulumi` must also be available on `PATH`.

## Publish

GitHub Actions runs install, CRD regeneration, typecheck, and build. Publishing
runs from GitHub Releases with npm provenance and requires an `NPM_TOKEN`
repository secret.
