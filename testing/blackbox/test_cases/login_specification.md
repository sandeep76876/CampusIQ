# Blackbox Specification: User Login

## Test Case ID: BB-AUTH-001
- **Description:** Verify user login with valid credentials yields JWT token and user profile.
- **Input:** Valid email and password.
- **Expected Result:** HTTP 200 with `{ success: true, token: "...", user: { ... } }`.
