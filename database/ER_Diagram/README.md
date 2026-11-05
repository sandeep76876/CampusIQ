# CampusIQ Database Entity Relationship (ER) Documentation

This directory documents the relational architecture of the PostgreSQL database for the CampusIQ platform.

## Relational Model Overview

```mermaid
erDiagram
    USERS ||--o{ ENROLLMENTS : registers
    USERS ||--o{ ATTENDANCE : logs
    USERS ||--o{ MARKS : receives
    USERS ||--o{ ASSIGNMENT_SUBMISSIONS : submits
    USERS ||--o{ NOTIFICATIONS : receives
    USERS ||--o{ PERFORMANCE_PREDICTIONS : analyzed

    DEPARTMENTS ||--o{ COURSES : offers
    DEPARTMENTS ||--o| USERS : "headed by"

    COURSES ||--o{ ENROLLMENTS : contains
    COURSES ||--o{ ATTENDANCE : holds
    COURSES ||--o{ MARKS : evaluates
    COURSES ||--o{ ASSIGNMENTS : assigns
    COURSES ||--o{ STUDY_MATERIALS : includes

    ASSIGNMENTS ||--o{ ASSIGNMENT_SUBMISSIONS : accepts
```
