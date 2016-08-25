# eslint-config

This repository contains modules that provide my peraonsl [ESLint][esl]
configuration for JavaScript code. It provides rules to cover ES2015 in various
environments, including the browser and Node.js.

## Installation

Individual packages within this repository are available on npm. The packages
are scoped to my personal account. You can install them in the usual manner:

```sh
npm install @jamesallardice/eslint-config-base
```

See the "Packages" section below for a list of available packages.

## Usage

Determine which configuration or set of configurations would work best for your
project and install them. Available modules can be found in the `packages`
directory. Each module should have its own readme detailing usage.

### Packages

- `@jamesallardice/eslint-config-base` - My personal base ESLint config used for
  all JavaScript.
- `@jamesallardice/eslint-config-react` - My personal ESLint config used for all
  React apps with JSX.

[esl]: http://eslint.org/
