# Bugs for Testing Training

This document describes intentional bugs introduced in the Sales Dashboard (`sales1` user) for software testing training purposes.

## Test User Credentials

### Users with Bugs:
- **Username**: `sales1`
- **Password**: `sales123`
- **Username**: `testuser2`
- **Password**: `it's_me` (contains apostrophe - will trigger 400 error)

## List of Intentional Bugs

### Bug #1: 400 Bad Request Error for Apostrophe in Username/Password
**Location**: Authentication Service (`src/auth.ts` - `authenticate` function)

**Description**: 
The `authenticate` function throws a 400 Bad Request error when username or password contains an apostrophe character (`'`). This is a validation bug that prevents users with apostrophes in their credentials from logging in.

**Expected Behavior**:
- Users should be able to log in with any valid characters in username and password
- Apostrophe should be allowed as a valid character

**Actual Behavior**:
- When username or password contains an apostrophe (`'`), the function throws:
  - "400 Bad Request: Username and password cannot contain apostrophe characters. Please remove apostrophes and try again."
- User `testuser2` with password `it's_me` cannot log in due to this bug
- The error is displayed immediately after clicking Login

**Test Case**:
- **Username**: `testuser2`
- **Password**: `it's_me`
- **Expected**: Should log in successfully
- **Actual**: Shows 400 Bad Request error

**How to Find**:
1. Go to login page
2. Enter username: `testuser2`
3. Enter password: `it's_me`
4. Click Login button
5. Error message appears: "400 Bad Request: Username and password cannot contain apostrophe characters..."

**Severity**: **HIGH** - Prevents valid users from logging in

**Affected Pages**:
- Main Login Page (`/`)
- Alternative Login Page (`/login-application-pro-after-deploy`)

---

### Bug #2: Database Connection Timeout in Authentication Function (CRITICAL)
**Location**: Authentication Service (`src/auth.ts` - `authenticate` function)

**Description**: 
The `authenticate` function throws a database connection timeout error when attempting to authenticate user `sales1`. This is a bug in the authentication logic itself, not in the UI components. The error occurs at the authentication service level, simulating a real database connection failure.

**Expected Behavior**:
- User `sales1` should be able to authenticate successfully
- The `authenticate` function should query the database and return the user object
- After authentication, user should be redirected to the Sales Dashboard

**Actual Behavior**:
- When `sales1` credentials are passed to the `authenticate` function, it throws an error:
  - "Database connection timeout: Unable to connect to authentication service. Connection attempt timed out after 30 seconds."
- The error is thrown from within the `authenticate` function itself
- The error is caught and displayed to the user on both login pages
- User cannot proceed to the dashboard
- Other users (testuser1, trainer1, admin1) authenticate successfully without errors

**Technical Details**:
- The bug is in `src/auth.ts` in the `authenticate` function
- When `username === 'sales1'`, the function throws an Error instead of querying the database
- This simulates a database connection timeout scenario
- The error is properly caught in both `LoginPage` and `LoginPageAfterDeploy` components

**How to Find**:
1. Go to login page (`/` or `/login-application-pro-after-deploy`)
2. Enter username: `sales1`
3. Enter password: `sales123`
4. Click Login button
5. Error message appears: "Database connection timeout: Unable to connect to authentication service. Connection attempt timed out after 30 seconds."
6. Check the `authenticate` function in `src/auth.ts` to see the bug

**Severity**: **CRITICAL** - Complete authentication failure at service level

**Affected Pages**:
- Main Login Page (`/`)
- Alternative Login Page (`/login-application-pro-after-deploy`)

---

### Bug #2: 500 Internal Server Error on Sales Dashboard (CRITICAL)
**Location**: Sales Dashboard - Entire page

**Description**: 
When a user with role `salesperson` or username `sales1` logs in and tries to access the Sales Dashboard, the page displays a 500 Internal Server Error instead of the dashboard content.

**Note**: This bug is currently unreachable due to Bug #1 (authentication failure), but the code is still present in SalesDashboard component.

**Expected Behavior**:
- User should see the Sales Dashboard with sales data, progress bars, and statistics

**Actual Behavior**:
- User sees a 500 Internal Server Error page with message "Database connection failed. Unable to fetch sales data."
- The error page shows:
  - Large "500" text
  - "Internal Server Error" heading
  - Error message about database connection failure
  - Button to return to login

**Severity**: **CRITICAL** - Complete page failure

---

### Bug #3: Incorrect Progress Percentage Calculation
**Location**: Sales Dashboard - Progress Bar

**Description**: 
The progress percentage is calculated incorrectly. Instead of calculating `(current / target) * 100`, it calculates `(target / current) * 100`.

**Expected Behavior**:
- Current: $32,500
- Target: $50,000
- Expected percentage: (32,500 / 50,000) * 100 = **65%**

**Actual Behavior**:
- Calculated percentage: (50,000 / 32,500) * 100 = **154%** (which exceeds 100% and is incorrect)

**How to Find**:
- Login as `sales1` / `sales123`
- Check the progress percentage displayed
- Verify the calculation manually

---

### Bug #2: Incorrect Remaining Amount Calculation
**Location**: Sales Dashboard - Stats Grid - "Remaining" card

**Description**:
The remaining amount is calculated by subtracting target from current instead of current from target, resulting in a negative value.

**Expected Behavior**:
- Remaining = Target - Current = $50,000 - $32,500 = **$17,500**

**Actual Behavior**:
- Remaining = Current - Target = $32,500 - $50,000 = **-$17,500** (negative value)

**How to Find**:
- Check the "Remaining" card in the stats grid
- Notice the negative value or incorrect calculation

---

### Bug #3: Incorrect Average Ticket Calculation
**Location**: Sales Dashboard - Sales Breakdown - "Average Ticket"

**Description**:
The average ticket is calculated by dividing current sales by the number of Personal Training sessions (15) instead of dividing by the number of Memberships Sold (23).

**Expected Behavior**:
- Average Ticket = Current Sales / Memberships Sold = $32,500 / 23 = **$1,413**

**Actual Behavior**:
- Average Ticket = Current Sales / Personal Training = $32,500 / 15 = **$2,167** (incorrect)

**How to Find**:
- Check the "Average Ticket" value in Sales Breakdown section
- Verify it should be calculated based on Memberships Sold, not Personal Training

---

## Testing Scenarios

### Scenario 1: Functional Testing
1. Login as `sales1` / `sales123`
2. Navigate to Sales Dashboard
3. Verify all displayed values are correct
4. Check calculations manually

### Scenario 2: Boundary Testing
1. Test with different sales values
2. Check what happens when current exceeds target
3. Verify percentage doesn't exceed 100%

### Scenario 3: Data Validation Testing
1. Verify all numbers are positive (except where negative makes sense)
2. Check that percentages are between 0-100%
3. Verify calculations match expected formulas

### Scenario 4: UI/UX Testing
1. Check if negative values are displayed correctly
2. Verify progress bar doesn't exceed 100% width
3. Check if incorrect calculations are visually obvious

## Expected Test Results

A good test should identify:
- ✅ Progress percentage showing 154% instead of 65%
- ✅ Remaining amount showing negative value (-$17,500)
- ✅ Average Ticket showing $2,167 instead of $1,413
- ✅ Progress bar extending beyond 100% width (if CSS allows)

## Notes for Instructors

These bugs are intentionally subtle and require:
- Manual calculation verification
- Understanding of business logic
- Attention to detail
- Knowledge of expected formulas

Students should practice:
- Writing test cases
- Manual testing
- Bug reporting
- Verification of calculations

