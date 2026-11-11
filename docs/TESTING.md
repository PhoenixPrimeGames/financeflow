# FinanceFlow
## Software Testing Plan and Results

**Version:** 1.0  
**Date:** November 10, 2026  
**Course:** COSC 4272 Senior Seminar  
**Project:** FinanceFlow  
**Status:** Initial testing baseline

---

## 1. Purpose

This document describes the testing strategy, planned test cases, verification procedures, and actual testing results for FinanceFlow.

Testing will be performed incrementally throughout development.

All testing results must reflect actual execution. Planned tests will not be marked as passed until they have been implemented and verified.

## 2. Testing Objectives

The primary testing objectives are to:

- Verify that functional requirements are satisfied.
- Detect errors in transaction handling and financial calculations.
- Confirm that data storage and CSV export work correctly.
- Validate user-interface behavior and responsiveness.
- Establish a repeatable automated regression testing process.
- Confirm that the application builds and operates correctly before deployment.

## 3. Testing Environment

### 3.1 Development Environment

| Component | Version |
|---|---|
| Operating System | Windows |
| Node.js | 24.22.2 |
| npm | 11.19.1 |
| Git | 2.45.2.windows.1 |
| Vite | 8.3.8 |
| Vitest | 5.1.0 |
| Linter | Oxlint |

### 3.2 Testing Tools

**Vitest:** Automated unit testing.

**TypeScript Compiler:** Static type checking during production builds.

**Oxlint:** Automated source code quality analysis.

**Web Browser:** Manual functional, responsive layout, and usability testing.

**Git:** Version control and tracking of verified implementation changes.

## 4. Testing Strategy

### 4.1 Automated Unit Testing

Automated tests will primarily cover pure business-logic functions, including:

- Transaction validation.
- Monetary input conversion.
- Category validation.
- Monthly income and expense calculations.
- Net income calculations.
- Transaction filtering.
- Expense aggregation by category.
- localStorage data serialization and validation.
- CSV generation and escaping.

Tests should include valid inputs, invalid inputs, boundary conditions, and empty datasets.

### 4.2 Manual Functional Testing

Manual testing will verify application behavior that requires user interaction.

Examples include adding, editing, and deleting transactions, selecting filters, refreshing the browser, and downloading CSV files.

### 4.3 Regression Testing

Automated tests will be executed after major changes to ensure previously verified functionality continues to operate correctly.

### 4.4 Build and Code Quality Verification

The following commands will be used:

```bash
npm test
npm run build
npm run lint
```

All three commands should complete successfully before a development milestone is considered verified.

## 5. Automated Test Cases

| ID | Test Description | Requirement | Status |
|---|---|---|---|
| T-01 | Accept valid monetary amounts | FR-01 | Planned |
| T-02 | Reject zero, negative, or malformed amounts | FR-01 | Planned |
| T-03 | Validate category/type combinations | FR-02 | Planned |
| T-04 | Calculate monthly income | FR-03 | Planned |
| T-05 | Calculate monthly expenses | FR-03 | Planned |
| T-06 | Calculate monthly net income | FR-03 | Planned |
| T-07 | Exclude transactions outside selected month | FR-03 | Planned |
| T-08 | Apply multiple transaction filters | FR-04 | Planned |
| T-09 | Aggregate expenses by category | FR-04 | Planned |
| T-10 | Serialize and restore transaction data | FR-05 | Planned |
| T-11 | Handle invalid stored data and storage errors | FR-05 | Planned |
| T-12 | Generate valid, safely escaped CSV data | FR-05 | Planned |

These tests will be implemented during their corresponding development milestones.

## 6. Manual Acceptance Test Cases

| ID | Test Description | Requirement | Status |
|---|---|---|---|
| M-01 | Add a valid income transaction | FR-01 | Planned |
| M-02 | Add a valid expense transaction | FR-01 | Planned |
| M-03 | Edit an existing transaction | FR-01 | Planned |
| M-04 | Delete a transaction with confirmation | FR-01 | Planned |
| M-05 | Display validation feedback for invalid input | FR-01 | Planned |
| M-06 | Display appropriate income and expense categories | FR-02 | Planned |
| M-07 | Update financial summaries after transaction changes | FR-03 | Planned |
| M-08 | Filter transaction history by month, type, and category | FR-04 | Planned |
| M-09 | Display correct expense category visualization | FR-04 | Planned |
| M-10 | Restore saved transactions after browser refresh | FR-05 | Planned |
| M-11 | Download and inspect CSV export | FR-05 | Planned |
| M-12 | Verify responsive layouts at mobile and desktop sizes | NFR-02 | Planned |
| M-13 | Verify keyboard operation and readable chart information | NFR-06 | Planned |
| M-14 | Verify functionality on the deployed GitHub Pages site | NFR-09 | Planned |

## 7. Initial Verification Results

### TEST-001: React Development Server

**Date:** November 10, 2026  
**Status:** Passed

**Procedure:**

1. Start the Vite development server.
2. Open the application at `http://localhost:5173/`.
3. Interact with the default React counter.

**Observed result:** The browser application loaded successfully and the counter incremented when clicked.

**Conclusion:** Initial React rendering and interaction verified.

### TEST-002: Initial Production Build

**Date:** November 10, 2026  
**Status:** Passed

**Command:** `npm run build`

**Observed result:**

- TypeScript compilation succeeded.
- Vite 8.3.8 completed the build.
- 20 modules transformed.
- Production output generated in `dist/`.
- Initial recorded build time: 142 milliseconds.

**Conclusion:** The starter project compiled successfully.

### TEST-003: Initial Code Quality Check

**Date:** November 10, 2026  
**Status:** Passed

**Command:** `npm run lint`

**Observed result:**

- Zero errors.
- Zero warnings.
- Three files analyzed using 116 rules.

**Conclusion:** Initial source files passed Oxlint.

### TEST-004: Automated Testing Smoke Test

**Date:** November 10, 2026  
**Status:** Passed

**Test File:** `src/smoke.test.ts`

**Command:** `npm test`

**Test Description:** Verify that Vitest executes a TypeScript test and validates an integer arithmetic result.

**Test Input:**

- First amount: 12,575 cents.
- Second amount: 25 cents.

**Expected Result:** 12,600 cents.

**Observed Result:** Test passed.

**Execution Results:**

- Test files: 1 passed.
- Tests: 1 passed.
- Failed tests: 0.
- Total test run duration: 196 milliseconds.

**Conclusion:** Vitest successfully executed the smoke test.

**Limitation:** This test verifies testing infrastructure and arithmetic only. It does not verify an implemented FinanceFlow business-logic function.

### TEST-005: Post-Vitest Production Build

**Date:** November 10, 2026  
**Status:** Passed

**Command:** `npm run build`

**Observed Result:**

- TypeScript compilation succeeded.
- Vite production build succeeded.
- 20 modules transformed.
- Build completed in 125 milliseconds.

**Conclusion:** Installing Vitest and adding the smoke test did not prevent the starter application from building.

### TEST-006: Post-Vitest Code Quality Check

**Date:** November 10, 2026  
**Status:** Passed

**Command:** `npm run lint`

**Observed Result:**

- Zero errors.
- Zero warnings.
- Four files analyzed using 116 rules.
- Execution time: 9 milliseconds.

**Conclusion:** The updated starter project passed linting.

## 8. Test Data

Financial tests will use fictional transaction information.

A planned reference dataset includes:

| Description | Type | Amount |
|---|---|---:|
| Salary | Income | $2,450.75 |
| Freelance | Income | $300.00 |
| Rent | Expense | $1,250.50 |
| Groceries | Expense | $50.25 |

Expected monthly values:

- Total income: $2,750.75
- Total expenses: $1,300.75
- Net income: $1,450.00

This dataset has not yet been used to test application business logic.

## 9. Defect Tracking

When defects are identified, they will be documented using:

- Defect identifier.
- Description.
- Steps to reproduce.
- Expected behavior.
- Actual behavior.
- Cause, if identified.
- Resolution.
- Verification result.

GitHub Issues may be used for tracking defects during development.

## 10. Testing Limitations

At this stage:

- FinanceFlow's functional requirements have not been implemented.
- Only the generated React starter interface has been manually tested.
- The automated smoke test does not exercise FinanceFlow business logic.
- Browser storage and CSV export have not been tested.
- Responsive application layouts have not been implemented.
- GitHub Pages deployment has not been verified.

Additional testing will be recorded as development progresses.

## 11. Milestone Testing Criteria

A milestone may be considered verified when:

1. Its intended functionality is implemented.
2. Corresponding automated tests pass, where applicable.
3. Required manual checks have been completed.
4. The application builds successfully.
5. Linting completes without errors.
6. Test evidence and known limitations are documented.

---

**End of Initial Testing Plan and Results**