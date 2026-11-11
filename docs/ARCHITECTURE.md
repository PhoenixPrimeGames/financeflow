# FinanceFlow
## Software Architecture and Technical Design

**Version:** 1.0  
**Date:** November 10, 2026  
**Course:** COSC 4272 Senior Seminar  
**Status:** Initial Architecture Baseline

---

## 1. Architecture Overview

FinanceFlow is a client-side, single-page application developed using React, TypeScript, and Vite.

The application uses a component-based architecture with centralized transaction state, separate business-logic modules, and browser localStorage for persistence.

No backend, external database, authentication system, or third-party financial service is required.

### 1.1 Design Objectives

The architecture prioritizes:

- Simplicity appropriate for an individual student project.
- Readable and maintainable source code.
- Separation of user-interface and business logic.
- Reliable financial calculations.
- Testability using Vitest.
- Responsive user-interface design.
- Compatibility with GitHub Pages.

### 1.2 High-Level Architecture

```text
                  FinanceFlow
                  React App
                      |
          +-----------+-----------+
          |                       |
     UI Components          Business Logic
          |                       |
     - Forms                 - Validation
     - History               - Calculations
     - Filters               - Categorization
     - Summary               - Filtering
     - Chart
          |                       |
          +-----------+-----------+
                      |
               Application State
                (React useState)
                      |
              +-------+-------+
              |               |
         localStorage      CSV Export
```

The React application coordinates user interactions and manages transaction state.

Business-logic functions process and validate transactions independently of the user interface.

Storage and export modules handle data persistence and file downloads.

---

## 2. Major Application Components

### 2.1 App.tsx

The primary application component.

Responsibilities:

- Maintain the collection of transactions.
- Maintain selected filters and editing state.
- Coordinate adding, editing, and deleting transactions.
- Load saved transaction records.
- Save valid transaction changes.
- Supply calculated financial information to child components.
- Display storage-related warnings.

Monthly financial summaries are derived from transaction data rather than stored as separate state.

### 2.2 TransactionForm.tsx

Provides the interface for adding and editing transactions.

Responsibilities:

- Collect transaction date, description, type, category, and amount.
- Show categories appropriate to the selected transaction type.
- Validate user input using shared validation functions.
- Display validation errors.
- Submit valid transaction information.
- Support canceling an edit operation.

### 2.3 TransactionTable.tsx

Displays transaction history.

Responsibilities:

- Render transactions in reverse chronological order.
- Display dates, descriptions, categories, types, and formatted amounts.
- Provide edit and delete controls.
- Request confirmation before deletion.
- Display an informative message when no transactions match the current filters.

The parent application remains responsible for modifying transaction state.

### 2.4 FilterBar.tsx

Provides controls for filtering transaction history.

Supported filters:

- Selected month
- Transaction type
- Category

Type and category filters apply to transaction history. Monthly financial summaries and category spending charts continue to include all qualifying transactions in the selected month.

### 2.5 MonthlySummary.tsx

Displays three calculated financial values:

- Monthly income
- Monthly expenses
- Monthly net income

The component receives calculated values as properties and does not independently manage financial data.

### 2.6 ExpenseChart.tsx

Displays expense totals grouped by category for the selected month.

The initial implementation will use horizontal CSS-based bars.

The chart will include visible category names and monetary values so users do not need to interpret the bars alone.

---

## 3. Transaction Data Model

### 3.1 Transaction

Every transaction contains the following properties:

| Property | Type | Description |
|---|---|---|
| id | string | Unique identifier |
| date | string | Date in YYYY-MM-DD format |
| description | string | Transaction description |
| type | income or expense | Transaction classification |
| categoryId | string | Predefined category identifier |
| amountCents | number | Positive integer monetary amount |

Transaction identifiers will be generated using `crypto.randomUUID()`.

### 3.2 Monetary Representation

All monetary values will be stored as integer cents.

For example:

- $25.99 is stored as 2599.
- $100.00 is stored as 10000.
- $0.01 is stored as 1.

User-entered monetary strings will be validated and converted to cents without relying on floating-point arithmetic for monetary calculations.

Amounts must be positive, contain no more than two decimal places, and remain within JavaScript's safe integer range when expressed in cents.

Transaction type determines whether the amount contributes to income or expenses.

### 3.3 Categories

Each predefined category has:

- A stable identifier.
- A display label.
- An associated transaction type.

Categories will be defined centrally in `src/domain/categories.ts`.

Category identifiers, rather than display labels, will be stored in transaction records.

---

## 4. Application State

React's built-in `useState` will be used for application state management.

Primary state values:

| State | Purpose |
|---|---|
| transactions | Complete transaction collection |
| selectedMonth | Selected reporting month |
| typeFilter | Transaction type filter |
| categoryFilter | Category filter |
| editingTransactionId | Transaction currently being edited |
| storageError | Current storage warning, if applicable |

The transaction form may manage temporary input fields locally.

Calculated summaries, spending totals, and filtered transaction lists will be derived from existing transaction state.

This reduces redundant state and helps prevent inconsistencies.

---

## 5. Business Logic

Business-logic functions will be placed in `src/domain/`.

### transaction.ts

Defines transaction types and validates transaction fields.

### categories.ts

Defines predefined categories and supports validating category/type relationships.

### finance.ts

Contains functions for:

- Calculating monthly income.
- Calculating monthly expenses.
- Calculating monthly net income.
- Filtering transactions.
- Grouping expenses by category.
- Sorting transaction history.

These functions will avoid direct dependencies on React or browser storage.

Pure financial calculation functions can therefore be tested independently.

---

## 6. Persistent Storage

### 6.1 Storage Method

FinanceFlow will use browser localStorage.

Proposed storage key:

`financeflow:v1:transactions`

### 6.2 Storage Format

Transactions will be stored as a JSON document containing:

- Schema version: 1
- An array of transaction records

The initial application loads and validates stored data before allowing it to become the authoritative transaction collection.

### 6.3 Storage Operations

The storage module will provide operations to:

- Read saved transaction data.
- Validate the saved document.
- Save an updated transaction collection.
- Report storage errors.

Malformed or incompatible stored data must not crash the application.

The application must not silently overwrite malformed stored data during initialization.

### 6.4 Storage Limitations

Browser localStorage:

- Is not encrypted by FinanceFlow.
- Can be deleted through browser settings.
- May be unavailable or restricted.
- Is specific to a browser origin and storage environment.
- Does not synchronize information across devices.
- Does not provide a guaranteed backup.

GitHub Pages projects hosted under the same origin may share access to that origin's localStorage. Namespacing the key prevents accidental naming conflicts but does not provide security isolation.

---

## 7. CSV Export

CSV export functionality will be implemented in `src/utils/csv.ts`.

The exported file will contain:

- Date
- Transaction type
- Category
- Description
- Amount in USD

Amounts will be converted from integer cents to decimal values with two fractional digits.

CSV generation will correctly handle commas, quotation marks, and line breaks.

Text fields will be protected against spreadsheet formula injection.

CSV export will include the full transaction collection, regardless of active history filters.

CSV import is outside the MVP scope.

---

## 8. User Interface Design

The application will use a responsive dashboard layout containing:

1. Application header and add-transaction control.
2. Selected month and financial summary cards.
3. Expense category visualization.
4. Transaction filtering controls.
5. Transaction history.
6. Transaction entry and editing interface.

The application will use standard CSS without requiring a third-party styling framework.

The layout will adapt to desktop, tablet, and mobile viewport sizes.

Important controls will be keyboard-accessible and use appropriate labels.

---

## 9. Testing Architecture

Vitest will be used for automated testing.

Initial automated tests will focus on:

- Monetary validation and conversion.
- Category validation.
- Monthly financial calculations.
- Transaction filtering.
- Expense category aggregation.
- Browser storage serialization and validation.
- CSV generation and escaping.

Additional manual testing will verify:

- Transaction creation, editing, and deletion.
- Form validation feedback.
- Automatic summary updates.
- Data persistence after refresh.
- Responsive layout behavior.
- Browser compatibility.
- Deployed application functionality.

Tests will be linked to functional requirement acceptance criteria in `docs/TESTING.md`.

---

## 10. Development and Deployment

### 10.1 Local Development

Vite provides the development server and production build tools.

The application will be developed locally on Windows.

### 10.2 Source Control

Git tracks application source, configuration, tests, and documentation.

GitHub hosts the source repository:

https://github.com/PhoenixPrimeGames/financeflow

### 10.3 Production Deployment

The application will be deployed using GitHub Pages.

The expected application URL is:

https://phoenixprimegames.github.io/financeflow/

Vite will be configured with the production base path `/financeflow/`.

A GitHub Actions workflow will build, test, and deploy the application.

The deployed application will be tested separately from the local development environment.

---

## 11. Technical Decisions

| Decision | Rationale |
|---|---|
| React | Supports reusable interface components |
| TypeScript | Provides static type checking |
| Vite | Provides a straightforward development and build environment |
| Built-in React state | Sufficient for the MVP's limited state complexity |
| Integer cents | Prevents floating-point monetary calculation errors |
| localStorage | Provides persistence without a backend |
| Predefined categories | Reduces scope and simplifies validation |
| CSS-based chart | Avoids unnecessary charting dependencies |
| Vitest | Supports focused automated testing |
| GitHub Pages | Provides static application hosting |

---

## 12. Known Limitations

The architecture intentionally excludes:

- Multi-user operation.
- Remote data storage.
- Authentication.
- Automatic backups.
- Financial institution integration.
- CSV importing.
- Multi-currency support.
- Advanced financial forecasting.

These limitations are consistent with the initial project scope.

---

**End of Software Architecture Document v1.0**