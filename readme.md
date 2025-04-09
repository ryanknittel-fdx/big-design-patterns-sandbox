# BigDesign Patterns Sandbox

This monorepo is a sandbox environment for developing and testing BigDesign Patterns. There are two packages:
- `examples-site` is a lightweight site that showcases usage of the patterns
- `patterns` contains the components

The patterns are published on npm under [bigcommerce-design-patterns](https://www.npmjs.com/package/bigcommerce-design-patterns) so they can be more easily stress tested in apps before being added into the main BigDesign library.

## Developing

### Getting started

Before running any commands, make sure you have `pnpm` installed:

```sh
npm install -g pnpm
```

### Running the example site

Run the example site in dev mode by:
```sh
pnpm run dev
```

In dev mode, editing the components within the `patterns` package will hot-reload the example site, as the site uses the workspace to reference the `bigcommerce-design-patterns` dependency.

### Using the local patterns package in another local project

To use the local patterns package in another local project:

1. Add the following to the `package.json` file in your project (updating the path to the local patterns package):

```json
"bigcommerce-design-patterns": "link:../big-design-patterns-sandbox/packages/patterns",
```

2. Run `pnpm install` to install the local patterns package, creating a symlink in the local project's `node_modules` directory that points to the local patterns package. Your project will use the built files in the `dist` directory of the patterns package, so you'll need to run `pnpm run build` in the patterns package to build the files before using them in your project. 

#### Hot reloading

If you want to enable hot reloading of the patterns package, you can run `pnpm run build:watch` in the patterns package folder (`big-design-patterns-sandbox/packages/patterns`) to watch for changes and rebuild the files on file save.

## Publishing

### Using changesets to publish a new version

This repo uses [changesets](https://github.com/changesets/changesets) to version the packages in a consistent manner. It also builds a changelog automatically.

To release a new version with changes:

1. Run the following command to create a new changeset:
```sh
npx @changesets/cli
```

The CLI will ask you to select which package(s) are being updated and if the packages should have a major or minor bump. After confirming these answers, a new changeset will be created in `/.changeset`.

2. Commit the generated file in `/.changeset/` to your branch and push to GitHub.

3. Create a PR with your changes and the changeset.

4. Once the PR is approved and merged into the `main` branch, the GitHub Action at `/.github/workflows/release.yml` will run, which creates a version bump PR.

5. Merging the version bump PR will release the new package version to NPM.
