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

### Using changesets to publish a new version

This repo uses [changesets](https://github.com/changesets/changesets) to version the packages in a consistent manner. It also builds a changelog automatically.

To release a new version after making changes, run:
`npx @changesets/cli`

The CLI will ask you to select which package(s) are being updated and if the packages should have a major or minor bump. After confirming these answers, a new changeset will be created in `/.changeset`.

Once that changeset is merged into the main branch, the GitHub Action at '/.github/workflows/release.yml` will run, which creates a version bump PR.

Merging the version bump PR will release the new package version to NPM.
