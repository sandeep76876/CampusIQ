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
