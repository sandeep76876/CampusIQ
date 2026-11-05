# CampusIQ – Data Flow & Communication Patterns

1. **Client to Backend:** React client passes JWT bearer tokens in HTTP headers to Express REST APIs.
2. **Backend to Database:** Node.js queries PostgreSQL via a connection pool (`pg.Pool`).
3. **Backend to AI Microservice:** For heavy analytics (grade forecast, attendance OCR, plagiarism similarity), the Node.js backend issues internal REST requests to FastAPI.
