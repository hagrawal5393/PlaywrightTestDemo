# Playwright Test Demo

A Playwright-based end-to-end and API test project for validating a client site and backend flows. The project uses TypeScript, Playwright fixtures, Zod validation, and GitHub Actions to run tests and publish the HTML report to GitHub Pages for this repository only.

## Project overview

This repo contains:

- end-to-end browser tests for the client site
- API tests using Playwright request helpers
- reusable page object and API fixtures
- schema validation with Zod
- CI workflow that runs grouped test sets and publishes merged HTML reports

## Repository-scoped GitHub Pages deployment

The GitHub Actions workflow is configured to deploy the generated report for this project only:

- GitHub Pages URL: https://hagrawal5393.github.io/PlaywrightTestDemo/
- Deployment is triggered for pushes and manual runs
- Pull requests do not deploy the report to Pages

This keeps the deployment tied to this repository and avoids cross-project or unrelated package references.

## Tech stack

- Playwright
- TypeScript
- Node.js
- Zod
- GitHub Actions
- GitHub Pages

## Prerequisites

- Node.js 18+ or the version used by the project
- npm
- A working browser environment for Playwright

## Install dependencies

```bash
npm install
```

## Browser setup

```bash
npx playwright install --with-deps
```

## Run tests locally

### Full suite

```bash
npx playwright test
```

### Smoke tests

```bash
npm run smoke
```

### Sanity tests

```bash
npm run sanity
```

### API tests

```bash
npm run api
```

### Regression tests

```bash
npm run regression
```

### Headed local run

```bash
npm test
```

### UI mode

```bash
npm run ui
```

### Debug mode

```bash
npm run debug
```

## Project structure

```text
.
├── .github/
│   ├── actions/
│   └── workflows/
├── env/
├── fixtures/
│   ├── api/
│   └── pom/
├── pages/
│   └── clientSite/
├── test-data/
├── tests/
│   ├── API/
│   ├── clientSite/
│   └── auth.setup.ts
├── .gitignore
├── eslint.config.mts
├── package.json
├── playwright.config.ts
├── tsconfig.json
├── README.md
└── package-lock.json
```

## Environment variables

The CI workflow expects these repository secrets to be available:

- URL
- API_URL
- USER_NAME
- EMAIL
- PASSWORD

For local development, create a .env file if needed and use the same keys.

## CI workflow

The workflow in [./.github/workflows/playwright-custom-runner.yml](.github/workflows/playwright-custom-runner.yml) runs tests in stages:

1. smoke
2. sanity
3. API
4. regression
5. report merging
6. HTML artifact upload
7. GitHub Pages deployment

## Useful commands

```bash
npm run ci
npm run flaky
npx playwright show-report
```

## Notes

- The workflow is designed to stay within this repository.
- The Pages deployment URL points to this project only.
- The project is intended to stay self-contained and avoid any unrelated external GitHub package/project references.

## License

ISC
