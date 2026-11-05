# CampusIQ – Smart Academic Management & Student Performance Platform

CampusIQ is an enterprise-grade full-stack academic management and student analytics ecosystem. It consolidates academic administration, attendance management, performance monitoring, automated grading insights, OCR-driven workflows, and AI-powered educational recommendations into a unified, modular platform.

---

## 1. Project Overview

CampusIQ empowers educational institutions by providing:
- **Centralized Administration:** Unified role-based management for Students, Teachers, Department Heads, and Administrators.
- **Academic Lifecycle Management:** Courses, enrollments, syllabi, study materials, and assignments.
- **Attendance & Records:** Real-time tracking with support for OCR-based paper attendance sheet digitization.
- **Student Performance Analytics:** Historical grade trends, subject-wise diagnostics, and predictive early-warning systems.
- **Intelligent Services:** AI-assisted assignment similarity detection, grade forecasting, and automated academic summaries.

---

## 2. Technology Stack

| Domain | Technology / Tool | Purpose |
|---|---|---|
| **Frontend** | React.js (Vite), JavaScript, HTML5, CSS3 | Single-page responsive user interface |
| **Backend** | Node.js, Express.js | Core RESTful API microservices & business logic |
| **Database** | PostgreSQL | Relational transactional and academic records storage |
| **Authentication** | JWT (JSON Web Tokens), bcrypt | Secure stateless auth & Role-Based Access Control (RBAC) |
| **AI / ML Service** | Python, FastAPI, Scikit-learn, Pandas, NumPy | Machine learning models & predictive analytics |
| **Generative AI** | Gemini API / OpenAI API | Academic summarization & contextual AI insights |
| **OCR & Vision** | Tesseract OCR, OpenCV | Automated digitisation of scanned attendance sheets |
| **Testing** | Jest, Supertest, PyTest, Playwright | Unit, integration, E2E, blackbox & whitebox testing |
| **Dev Tools** | Git, GitHub, VS Code, Postman | Version control, collaboration & API documentation |

---

## 3. High-Level Folder Structure

```
CampusIQ/
│
├── frontend/                 # React.js web client (Vite-based)
│   ├── public/               # Static assets & web manifest
│   ├── src/                  # React components, pages, hooks, contexts, services
│   ├── package.json          # Frontend dependencies & build scripts
│   └── .env.example          # Frontend environment variables template
│
├── backend/                  # Node.js + Express REST API server
│   ├── src/                  # Application entry, modular domain routes, controllers
│   │   ├── config/           # Database, JWT, and runtime configurations
│   │   ├── modules/          # 14 distinct business domain modules
│   │   ├── middleware/       # Auth, RBAC, error handling, validation middleware
│   │   ├── services/         # Cross-cutting integration services
│   │   ├── utils/            # Utility helpers, standard response formatters
│   │   └── validators/       # Request validation schemas
│   ├── package.json          # Backend dependencies & runtime scripts
│   └── .env.example          # Backend environment variables template
│
├── ai-service/               # Python AI/ML Microservice (FastAPI)
│   ├── grade_prediction/     # Academic performance forecasting models
│   ├── ocr/                  # Attendance sheet OCR & preprocessing
│   ├── plagiarism/           # Text similarity & assignment plagiarism detection
│   ├── ai_features/          # LLM integrations (Gemini / OpenAI API)
│   ├── common/               # Shared python logging, configuration, utilities
│   ├── main.py               # Microservice REST API entry point
│   ├── requirements.txt      # Python dependencies
│   └── .env.example          # AI service environment template
│
├── database/                 # PostgreSQL Database Management
│   ├── schema/               # Core DDL tables, constraints, relationships
│   ├── migrations/           # Versioned migration scripts
│   ├── seeds/                # Development & testing seed records
│   ├── queries/              # Reusable analytical and operational SQL
│   └── ER_Diagram/           # Entity Relationship diagram documentation
│
├── docs/                     # Architectural, design, and meeting documentation
│   ├── architecture/         # System design, data flow, RBAC matrix
│   ├── diagrams/             # Visual architecture & sequence diagrams
│   ├── reports/              # Milestones, project reports, and review notes
│   └── api/                  # OpenAPI / Postman specifications
│
├── testing/                  # Quality Assurance & Testing Suite
│   ├── unit/                 # Unit tests (Frontend, Backend, AI service)
│   ├── integration/          # Inter-module and API integration tests
│   ├── blackbox/             # Specification-driven acceptance tests
│   ├── whitebox/             # Internal logic and branch coverage tests
│   └── e2e/                  # End-to-end browser workflow tests
│
├── .gitignore                # Git exclusions across Node.js, Python, and OS files
├── README.md                 # Primary project documentation
└── CONTRIBUTING.md           # Team guidelines, branching conventions & standards
```

---

## 4. Getting Started

### Prerequisites
- **Node.js**: v18.x or v20.x LTS
- **Python**: v3.10+
- **PostgreSQL**: v14+
- **Tesseract OCR**: Installed on host machine (for image text extraction)
- **Git**

### Installation & Local Setup

#### 1. Repository Setup
```bash
git clone https://github.com/your-org/CampusIQ.git
cd CampusIQ
```

#### 2. Backend Setup
```bash
cd backend
cp .env.example .env
npm install
npm run dev
# Backend runs at http://localhost:5000
```

#### 3. Frontend Setup
```bash
cd ../frontend
cp .env.example .env
npm install
npm run dev
# Frontend runs at http://localhost:5173
```

#### 4. AI/ML Service Setup
```bash
cd ../ai-service
cp .env.example .env
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
python main.py
# AI Microservice runs at http://localhost:8000
```

#### 5. Database Setup
```bash
# Connect to PostgreSQL and execute the schema files
psql -U postgres -d campusiq_db -f database/schema/01_users_roles.sql
psql -U postgres -d campusiq_db -f database/schema/02_academics.sql
psql -U postgres -d campusiq_db -f database/schema/03_attendance_marks.sql
psql -U postgres -d campusiq_db -f database/schema/04_assignments_materials.sql
psql -U postgres -d campusiq_db -f database/schema/05_notifications_analytics.sql
# Populate development seed data
psql -U postgres -d campusiq_db -f database/seeds/01_seed_roles_users.sql
```

---

## 5. Team & Contribution
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for Git branch naming, commit standards, pull request policies, and coding conventions.


# CampusIQ – Phased Build Plan

CampusIQ will be built in 8 phases. Each phase ends with something you can use and test in the preview. The basics come first (logins, roles, academic data). The AI and ML features come later, once there is real data for them to work on.

## How your document's tech stack maps to this build

| Document says | Built here with | Why |
|---|---|---|
| React.js frontend | React 19 + TanStack Start | Same React, plus built-in routing and server code |
| Node/Express REST APIs | Server functions (TypeScript) | Same job, no separate server to host |
| PostgreSQL | Lovable Cloud (PostgreSQL) | Real Postgres, nothing to set up |
| JWT + password hashing | Lovable Cloud Auth | Handles JWT sessions, hashing and email verification |
| RBAC | `user_roles` table + row-level security | The database enforces who can see what |
| Gemini / OpenAI | Lovable AI Gateway (Gemini/GPT models) | No API key needed, structured output |
| Python ML (scikit-learn/XGBoost) | Regression model in TypeScript, optional Python notebook for training | Python can't run in the hosted app; train offline, run predictions in the app |
| Tesseract + OpenCV OCR | AI vision model reads attendance sheet images | More accurate on handwriting, no extra server |
| Plagiarism detection | Text similarity (n-gram/cosine) + AI embeddings | Runs entirely inside the app |

For your project report you can still describe the architecture as client → API → database → AI/ML services. The pieces are the same; only the hosting is simpler.

---

## Phase 1 – Foundation, Auth and RBAC (Module 1)
**Goal:** Secure sign-in with three roles.

- Tables: `profiles` (name, roll no / employee ID, department, avatar), `user_roles` (role enum: admin, teacher, student), and a `has_role()` check function.
- Pages: Landing, Login, Signup, Forgot/Reset password.
- After login, each role is sent to its own area: `/student`, `/teacher`, `/admin`. A student who tries to open a teacher page is blocked.
- Visual design: app shell with a sidebar, colour theme and fonts.
- **Done when:** three test accounts (one per role) each land on the right dashboard and can't open the others.

## Phase 2 – Academic Structure and Admin Panel (Modules 4, 5)
**Goal:** Admins set up the college structure.
- Tables: `departments`, `courses`, `subjects` (with semester and credits), `class_sections`, `enrollments` (student ↔ subject), `teaching_assignments` (teacher ↔ subject).
- Admin dashboard: create, edit and delete departments, courses and subjects. Manage users (invite, assign role, deactivate). Assign teachers to subjects and enrol students.
- Activity log table for system monitoring.
- **Done when:** an admin can build a department with subjects and assign a teacher and students to it.

## Phase 3 – Study Materials, Attendance and Marks (Modules 6, 7, 8)
**Goal:** The core academic workflows.
- File storage buckets for notes, syllabus and previous-year question papers. Teachers upload, students of that subject download.
- Attendance: a teacher picks a subject and date, then marks students in a present/absent grid. Students see their percentage for each subject.
- Marks: teacher enters marks per exam (internal, mid-term, final) with a maximum score. Students see a subject-wise report card and GPA/CGPA.
- **Done when:** a teacher records attendance and marks, and the student sees both on their dashboard.

## Phase 4 – Assignments, Announcements and Notifications (Modules 9, 10)
**Goal:** Communication and coursework.
- Assignments: teacher creates one (title, description, due date, file). Student uploads a submission. Teacher grades it and leaves feedback. Late submissions are flagged.
- Announcements: posted to a whole department, a subject, or everyone.
- In-app notification bell for new announcements, new assignments, graded work, and attendance below 75% (the limit can be changed).
- **Done when:** a student is notified of a new assignment, submits it, and gets a grade back.

## Phase 5 – Dashboards and Performance Analytics (Modules 2, 3, 11)
**Goal:** Turn the data into insights.
- Student dashboard: attendance per subject, marks trend, weak subjects highlighted, upcoming deadlines.
- Teacher dashboard: class averages, mark distribution, at-risk students, submission rates.
- Admin dashboard: totals, department comparisons, recent activity.
- Charts built with Recharts.
- **Done when:** each dashboard shows charts based on the real data entered in Phases 3–4.

## Phase 6 – AI Learning Tools (Module 12)
**Goal:** Generative AI features through the Lovable AI Gateway.
- **AI Quiz Generator:** student enters a topic, difficulty and number of questions. Gets back multiple-choice questions with the correct answer and an explanation, checked against a fixed format. Student takes the quiz in the app, gets a score, and attempts are saved.
- **AI Topic Summarizer:** pick an uploaded material or paste text. Get a summary, key concepts, definitions and revision notes.
- **AI-Assisted Paper Evaluation:** teacher provides the question, the model answer and the student's answer (typed or uploaded). AI suggests marks, lists missing concepts and drafts feedback. The teacher must approve or edit before anything is saved.
- Usage limits and clear error messages when the AI is busy or credits run out.
- **Done when:** all three tools return clean, structured results in the app.

## Phase 7 – ML and Automation (Modules 13, 14, 15)
**Goal:** Prediction, OCR and plagiarism checks.
- **Grade Prediction:** features are past marks, attendance %, assignment scores and internal marks. A regression model (trained on seeded historical data, with an optional Jupyter/scikit-learn notebook for your report) predicts the final grade and a risk level. Shown on both student and teacher dashboards with the main factors behind each prediction.
- **OCR Attendance:** teacher uploads a photo of the attendance sheet. AI vision reads roll numbers and P/A marks into an editable table. The teacher checks and corrects it, then saves. Nothing is saved without that check.
- **Plagiarism Detection:** when work is submitted, its text is compared with other submissions and reference material (shingling + cosine similarity, plus embeddings to catch reworded text). The teacher gets a report with a similarity % and highlighted matching passages. Students see it only if the teacher allows it.
- **Done when:** a prediction appears for seeded students, a sample sheet is read correctly, and two similar submissions are flagged.

## Phase 8 – Testing, Hardening and Launch
- Security scan, review of database access rules, input checks on every form and server function.
- Automated tests for the key rules: role access, attendance %, the 75% shortage alert, GPA calculation, teacher-approval steps.
- Demo data (departments, about 50 students, marks, attendance) for presentations.
- Mobile layout pass, SEO titles for each page, publish.
- Optional: Future Scope items (RAG assistant, AI question papers, recommendations).

---

## Suggested timeline (about 10–12 weeks for a student team)
```text
  Phase 1  Auth + RBAC
  Phase 2  Admin + structure
  Phase 3  Materials, attendance, marks
  Phase 4  Assignments, notifications
  Phase 5  Dashboards & analytics
  Phase 6  AI tools
  Phase 7  ML, OCR, plagiarism
  Phase 8  Testing, docs, launch
```

## Technical details
- Roles live only in `user_roles`; every table uses row-level security with `has_role(auth.uid(), ...)` plus ownership/enrollment checks.
- Server logic uses `createServerFn` with auth middleware; AI calls go through `@lovable.dev/ai-gateway` server-side with schema-validated (zod) output.
- Storage buckets are private, with signed URLs based on enrollment.
- Prediction model: features → linear/gradient-boosted coefficients stored in a `ml_models` table; inference in TypeScript. The training notebook is kept outside the app.
- Similarity: text pulled from submissions is stored, and comparisons run in a server function when work is submitted.

