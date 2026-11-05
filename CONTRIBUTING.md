# CampusIQ – Contributor & Team Collaboration Guide

Welcome to the **CampusIQ** development team. This document sets out workflow practices, code standards, and branch conventions for all four team members to ensure smooth collaboration without merge conflicts or code drift.

---

## 1. Team Roles & Ownership

| Area | Primary Responsibilities |
|---|---|
| **Frontend** | React UI, component hierarchy, responsive styling, state management, client routing |
| **Backend Core** | Express REST APIs, authentication/RBAC, database queries, module controllers |
| **Database & Analytics** | PostgreSQL schema, migrations, data seeding, SQL optimization, report queries |
| **AI / ML Services** | Python FastAPI service, Scikit-learn models, OCR pipelines, LLM integration |

---

## 2. Git Workflow & Branching Strategy

### Branch Naming Conventions
Always branch from `develop`. Use the following naming patterns:
- **Features:** `feature/<module>-<short-description>` (e.g., `feature/auth-jwt-login`, `feature/ocr-attendance-pipeline`)
- **Bug Fixes:** `fix/<module>-<short-description>` (e.g., `fix/attendance-date-parsing`)
- **Documentation:** `docs/<topic>` (e.g., `docs/er-diagram-update`)
- **Testing:** `test/<area>` (e.g., `test/backend-auth-supertest`)

### Branch Lifecycle
1. Pull the latest `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   ```
2. Create your feature branch:
   ```bash
   git checkout -b feature/grades-prediction-api
   ```
3. Commit small, logical changes with descriptive commit messages following the Conventional Commits format:
   - `feat(auth): implement refresh token rotation`
   - `fix(marks): resolve floating point issue in GPA calculation`
   - `docs(api): update postman collection with attendance endpoints`
   - `test(ocr): add unit tests for thresholding filter`
4. Push to remote and open a Pull Request (PR) into `develop`.
5. Require at least **one peer review approval** before merging.

---

## 3. Environment Variables & Secret Handling

- **NEVER** commit `.env` files to git.
- If your module introduces a new environment variable, update the corresponding `.env.example`:
  - `backend/.env.example`
  - `frontend/.env.example`
  - `ai-service/.env.example`
- Document the variable's purpose and valid sample format.

---

## 4. Coding Conventions & Standards

### JavaScript (Frontend & Backend)
- **Formatting:** Use Prettier and ESLint.
- **Naming Conventions:**
  - Files:
    - React Components: `PascalCase.jsx` (e.g., `AttendanceTracker.jsx`)
    - JavaScript utilities/modules: `camelCase.js` (e.g., `responseHandler.js`)
    - Controllers, routes, services: `<module>.<type>.js` (e.g., `auth.controller.js`, `auth.routes.js`)
  - Variables & Functions: `camelCase` (e.g., `calculateGpa`, `currentUser`)
  - Constants: `UPPER_SNAKE_CASE` (e.g., `DEFAULT_PAGE_SIZE`, `USER_ROLES`)

### Python (AI/ML Service)
- Follow **PEP 8** style guidelines.
- Use type hints wherever possible (`def predict_grade(features: list[float]) -> str:`).
- Keep submodules isolated: each module (`ocr`, `grade_prediction`, `plagiarism`) should contain its own preprocessing and inference logic, referencing `common/` for shared helpers.

### Database (PostgreSQL)
- Table names: `plural_snake_case` (e.g., `users`, `course_enrollments`, `student_marks`).
- Primary keys: `id UUID PRIMARY KEY DEFAULT gen_random_uuid()` or `BIGSERIAL`.
- Foreign keys: `<singular_table>_id` (e.g., `student_id`, `course_id`).
- Timestamps: Always include `created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP` and `updated_at`.

---

## 5. Module Independence & Separation of Concerns

- **Frontend:** Does not make direct DB or AI calls. All communication flows through the Node.js backend or authenticated API gateways.
- **Backend:** Orchestrates business operations and proxies complex predictive or OCR jobs to the `ai-service` via internal REST calls.
- **AI Service:** Stateless processing engine. Does not manage raw session cookies or direct user authentication. Receives structured payloads and returns JSON inference or extracted OCR text.

---

## 6. Definition of Done (DoD)
A task is considered complete when:
1. Code follows the designated architectural conventions.
2. Unit tests are added or updated in the corresponding `testing/` directory.
3. No secrets or personal credentials exist in commits.
4. Pull request passes code review and merges cleanly into `develop`.
