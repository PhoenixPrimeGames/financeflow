# FinanceFlow

**Personal Finance Tracker**

A responsive, browser-based personal finance tracking application developed as an individual software project for COSC 4272 Senior Seminar at Lamar University.

FinanceFlow is designed to help users manually record income and expenses, organize transactions into categories, calculate monthly financial summaries, and visualize spending patterns.

## Project Status

**Development Stage:** Milestone 1, Project Initialization

The project is currently under development. The React and TypeScript development environment has been established, and initial requirements and architecture documents have been created.

The financial tracking features described below are planned MVP functionality and have not yet been implemented.

## Planned Features

### Transaction Management
- Add income and expense transactions.
- Edit and delete existing transactions.
- Validate transaction information and monetary amounts.

### Transaction Categorization
- Assign transactions to predefined categories.
- Maintain separate categories for income and expenses.

### Monthly Financial Summary
- Calculate monthly income.
- Calculate monthly expenses.
- Display monthly net income.
- Automatically update totals when transactions change.

### Filtering and Visualization
- Filter transactions by month, type, and category.
- Display transaction history.
- Visualize monthly spending by category.

### Persistent Storage and Export
- Save transactions using browser localStorage.
- Restore transactions when the application loads.
- Export transaction records to CSV.

## Technology Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| TypeScript | Type-safe development |
| Vite | Development server and build tooling |
| CSS | Responsive application styling |
| localStorage | Client-side data persistence |
| Vitest | Automated testing (planned setup) |
| Git and GitHub | Version control |
| GitHub Pages | Application deployment (planned) |

The application does not require a backend server, external database, authentication system, or paid API.

## Local Development

### Prerequisites

- Node.js 24 LTS or a compatible supported version
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/PhoenixPrimeGames/financeflow.git
```

Navigate to the project directory:

```bash
cd financeflow
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed by Vite, typically:

http://localhost:5173/

### Production Build

To generate a production build:

```bash
npm run build
```

Production files will be generated in the `dist` directory.

## Project Documentation

Project planning and development documentation is maintained in the `docs` directory.

- [Software Requirements Specification](docs/SRS.md)
- [Software Architecture](docs/ARCHITECTURE.md)
- [AI-Assisted Development Log](docs/AI_LOG.md)

Additional testing, deployment, and technical decision records will be added as development progresses.

## Development Methodology

FinanceFlow is being developed incrementally using AI-assisted software development practices.

ChatGPT is used to assist with:

- Requirements analysis and architecture planning.
- Code generation and technical explanations.
- Debugging and troubleshooting.
- Test design and verification.
- Documentation and deployment planning.

AI-generated recommendations and implementation work are reviewed and verified during development.

Significant AI contributions are documented in the project's AI assistance log.

## Financial Data Handling

FinanceFlow is intended for educational purposes and basic personal financial tracking.

Transaction records will be stored locally in the user's browser.

**Important limitations:**

- Browser localStorage is not encrypted by FinanceFlow.
- Financial records may be lost if browser data is cleared.
- Records are not automatically backed up or synchronized.
- Data is not shared across devices.
- The application does not connect to financial institutions.
- CSV export will be provided, but CSV import is outside the MVP scope.

Fictional financial data will be used for demonstrations and testing.

## Deployment

FinanceFlow is planned for deployment through GitHub Pages.

Expected deployment URL:

https://phoenixprimegames.github.io/financeflow/

The URL will not host the completed FinanceFlow application until deployment has been configured and verified.

## Project Scope

The MVP includes five functional requirements:

- FR-01: Transaction Management
- FR-02: Transaction Categorization
- FR-03: Monthly Financial Summary
- FR-04: Filtering and Visualization
- FR-05: Persistent Storage and Export

Features such as bank integration, user authentication, cloud synchronization, recurring transactions, and investment tracking are excluded from the MVP.

## Academic Context

**Institution:** Lamar University  
**Course:** COSC 4272 Senior Seminar  
**Project:** FinanceFlow  
**Development Type:** Individual, AI-assisted software project

---

*FinanceFlow is an educational software development project and is not intended to provide professional financial advice.*