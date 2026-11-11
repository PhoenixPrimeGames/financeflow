# FinanceFlow
## Software Requirements Specification

**Version:** 1.0  
**Date:** November 10, 2026  
**Course:** COSC 4272 Senior Seminar  
**Project Type:** Individual Software Development  
**Status:** MVP Baseline

---

## 1. Introduction

### 1.1 Purpose

FinanceFlow is a responsive, browser-based personal finance tracker designed to help individuals record, organize, and analyze their income and expenses.

### 1.2 Scope

The application will provide transaction management, categorization, monthly financial summaries, transaction filtering, spending visualization, persistent browser storage, and CSV export.

FinanceFlow operates entirely within the user's browser without a backend or user authentication system.

### 1.3 Target Users

Individuals who want a simple application to manually track personal financial activity.

---

## 2. Functional Requirements

### FR-01: Transaction Management

The application shall allow users to add, edit, and delete income and expense transactions.

Each transaction shall contain:

- Unique identifier
- Date
- Description
- Transaction type (income or expense)
- Category
- Monetary amount

**Acceptance Criteria:**

- AC-01.1: Users can successfully add valid transactions.
- AC-01.2: Users can edit existing transactions.
- AC-01.3: Users can delete transactions after confirmation.
- AC-01.4: Required fields cannot be empty.
- AC-01.5: Monetary amounts must be positive and have no more than two decimal places.
- AC-01.6: Invalid dates, amounts, and categories are rejected with clear feedback.

### FR-02: Transaction Categorization

The application shall provide predefined categories appropriate to each transaction type.

**Income Categories:**
- Salary
- Freelance
- Gifts
- Other Income

**Expense Categories:**
- Housing
- Groceries
- Transportation
- Utilities
- Dining
- Entertainment
- Healthcare
- Other Expense

**Acceptance Criteria:**

- AC-02.1: Income transactions display income categories.
- AC-02.2: Expense transactions display expense categories.
- AC-02.3: Transactions cannot be assigned categories from the wrong type.
- AC-02.4: Categories are correctly displayed in transaction history and financial analysis.

### FR-03: Monthly Financial Summary

The application shall calculate and display:

- Total monthly income
- Total monthly expenses
- Monthly net income

Net income = Total income - Total expenses.

**Acceptance Criteria:**

- AC-03.1: Income totals equal the sum of income transactions for the selected month.
- AC-03.2: Expense totals equal the sum of expense transactions for the selected month.
- AC-03.3: Net income equals income minus expenses.
- AC-03.4: Totals automatically update after transactions are added, edited, or deleted.
- AC-03.5: Transactions outside the selected month do not affect its summary.
- AC-03.6: Monetary calculations use integer cents.

### FR-04: Filtering and Visualization

The application shall provide:

- Transaction filtering by month, type, and category.
- Transaction history sorted by date, newest first.
- Monthly expense totals grouped by category.
- A graphical representation of category spending.
- Informative empty states when appropriate.

**Acceptance Criteria:**

- AC-04.1: Users can select a month.
- AC-04.2: Users can filter transactions by income, expense, or all types.
- AC-04.3: Users can filter transactions by category.
- AC-04.4: Multiple filters work together.
- AC-04.5: Category spending totals are calculated correctly.
- AC-04.6: The chart accurately represents monthly expense totals.
- AC-04.7: The monthly summary and spending chart include all transactions in the selected month, regardless of type and category filters applied to transaction history.

### FR-05: Persistent Storage and Export

The application shall save transaction records using browser localStorage and allow users to export their records to CSV.

**Acceptance Criteria:**

- AC-05.1: Valid transaction records are saved automatically.
- AC-05.2: Saved records are restored after an ordinary browser refresh.
- AC-05.3: Users can export all transaction records to CSV.
- AC-05.4: Exported CSV includes date, type, category, description, and amount.
- AC-05.5: CSV values are correctly escaped, including potentially unsafe spreadsheet formulas.
- AC-05.6: Storage failures or malformed stored data produce a visible warning without crashing the application.

---

## 3. Nonfunctional Requirements

### NFR-01: Usability

The application shall provide a clear, consistent interface with descriptive labels and understandable validation messages.

### NFR-02: Responsiveness

The interface shall function on desktop, tablet, and mobile screens, with a minimum target viewport width of 360 pixels.

### NFR-03: Performance

The application should remain responsive with at least 1,000 stored transactions. Initial rendering and common filtering operations should complete within two seconds on a contemporary laptop under normal testing conditions.

### NFR-04: Compatibility

The application shall support current stable versions of Google Chrome and Mozilla Firefox.

### NFR-05: Maintainability

The codebase shall use modular React components, TypeScript types, readable functions, and automated tests for business logic.

### NFR-06: Accessibility

The interface shall support keyboard operation, descriptive form labels, readable color contrast, and textual representations of chart information.

### NFR-07: Reliability

Invalid user input and malformed stored data shall be handled gracefully. Monetary calculations shall use integer cents to prevent floating-point rounding errors.

### NFR-08: Privacy and Security

Financial records shall remain in browser storage without transmission to an application server. Users shall be informed of the security limitations of localStorage.

### NFR-09: Deployment

The application shall produce a successful Vite production build and function when hosted through GitHub Pages.

---

## 4. Technology Stack

| Technology | Purpose |
|---|---|
| React | User interface |
| TypeScript | Type-safe application development |
| Vite | Development server and production build |
| CSS | Responsive styling |
| localStorage | Browser-based persistence |
| Vitest | Automated testing |
| Git | Version control |
| GitHub | Source repository |
| GitHub Pages | Static website hosting |

---

## 5. Assumptions and Constraints

- FinanceFlow is designed for one user per browser storage environment.
- Only United States dollars are supported.
- All monetary amounts are stored as positive integer cents.
- Transaction dates use the YYYY-MM-DD format.
- Income and expenses are distinguished by transaction type.
- Categories are predefined and cannot be customized in the MVP.
- New installations begin without transactions.
- No backend server or external database is available.
- Browser localStorage may be cleared by users or browser settings.
- Data is not synchronized between devices or browsers.
- CSV export is supported; CSV import is not required.
- Demonstration and testing data shall be fictional.

---

## 6. Features Excluded from the MVP

The following features are outside the project scope:

- Bank integrations
- Cloud synchronization
- User accounts and authentication
- Automatic transaction importing
- Recurring transactions
- Multiple currencies
- Investment tracking
- AI financial recommendations
- Monthly category budgets

Category budgets may be considered after the MVP is completed and verified.

---

## 7. MVP Completion Criteria

The MVP will be considered complete when:

1. All five functional requirements meet their acceptance criteria.
2. Automated business-logic tests pass.
3. Manual user-interface testing verifies core functionality.
4. Data successfully persists across browser refreshes.
5. CSV export generates valid transaction records.
6. The interface works on desktop and mobile layouts.
7. The production build succeeds.
8. The application functions on GitHub Pages.
9. Project documentation and AI-assisted development records are complete.

---

## 8. Project Limitations

FinanceFlow is intended for educational and personal demonstration purposes.

Browser localStorage is not encrypted by the application and should not be considered secure storage for sensitive financial information.

Records may be lost if browser data is deleted, storage becomes unavailable, or the user changes browsers or devices.

The application does not provide account recovery, automatic backup, or financial institution connectivity.

---

**End of Software Requirements Specification v1.0**