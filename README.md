# Express Template

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This is an Express template that provides a basic boilerplate and an OpenAPI schema for code generation and documentation

## Prerequisites

- Node.js version X.Y.Z (check with `node -v`)

## Installation

1. Clone this repository
2. Install dependencies
3. Generate API via Orval

## Scripts

### Development mode

Kickstart your development journey with a hot-reloading development server for swift iterations:

```bash
yarn dev
```

### Production build

Ready to deploy? Generate an optimized production build:

```bash
yarn build
```

### Running production build

Serve your production build:

```bash
yarn start
```

### Linting code

Keep your codebase clean and consistent with ESLint:

```bash
yarn lint
```

Fix all the issues that linter found:

```bash
yarn lint --fix
```

### Formatting code

Ensure code readability and maintainability with Prettier:

```bash
yarn format
```

### Bundling OpenAPI schema

Bundle your OpenAPI schema in a single `schema.yaml` file

```bash
yarn g:doc
```

### Regenerating API

Sync your API code with the OpenAPI schema:

```bash
yarn api:refresh
```

### Database management

Sync Prisma client with schema changes:

```bash
yarn db:generate
```

Sync database with Prisma schema:

```bash
yarn db:push
```

Drop database and sync with Prisma schema:

```bash
yarn db:reset
```

Seed your database with fake data:

```bash
yarn db:seed
```

## Contribution

### Commitizen

Make sure to install Commitizen on your machine:

```bash
npm install -g commitizen
```

Then follow Commitizen instructions after creating a new commit with the following command:

```bash
cz
```

### Precommit hooks

Please, note that precommit hooks are in place to maintain code quality standards. Before each commit, your code is processed by Prettier and ESLint according to project configurations
