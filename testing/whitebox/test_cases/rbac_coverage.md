# Whitebox Test Specification: RBAC Middleware Decision Branches

## Coverage Goals
- Branch 1: Request with missing `Authorization` header -> 401 Unauthorized.
- Branch 2: Request with expired token -> 401 Unauthorized.
- Branch 3: Authenticated user role not in `allowedRoles` -> 403 Forbidden.
- Branch 4: Authenticated user role present in `allowedRoles` -> `next()`.
