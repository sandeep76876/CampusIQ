# CampusIQ – System Architecture Overview

CampusIQ follows a modular decoupled microservices-ready architecture comprising:
1. **Frontend Presentation Layer:** React SPA communicating with backend REST endpoints over HTTPS.
2. **Backend Application Layer:** Node.js/Express server handling core domain routing, business rules, and auth.
3. **Database Layer:** PostgreSQL transactional database enforcing integrity with relational foreign keys.
4. **AI & Machine Learning Engine:** Dedicated Python FastAPI service exposing asynchronous endpoints for OCR and Scikit-learn inference.
