# BigDesign Patterns Sandbox

This monorepo is a sandbox environment for developing and testing BigDesign Patterns. There are two packages:
- `examples-site` is a lighweight site that showcases usage of the patterns
- `patterns` contains the components

The patterns are published on npm under `bigcommerce-design-patterns` so they can be more easily stress tested in apps before being added into the main BigDesign library.

## Developing

### Getting started

Before running any commands, make sure you have `pnpm` installed:

```sh
npm install -g pnpm
```

Run the example site in dev mode by:
```sh
pnpm run dev
```

In dev mode, editing the components within the `patterns` package will hot-reload the example site, as the site uses the workspace to reference the `bigcommerce-design-patterns` dependency.
