# Role-Based Access Control (RBAC) Permission Matrix

| Module | Admin | HOD | Teacher | Student |
|---|:---:|:---:|:---:|:---:|
| User Management | Full | View Dept | None | None |
| Department & Courses | Full | Manage Dept | View | View Enrolled |
| Attendance Entry | Full | View Dept | Manage Course | View Self |
| Attendance OCR | Full | View Dept | Manage Course | None |
| Marks & Grading | Full | View Dept | Manage Course | View Self |
| Assignment Creation | Full | Manage Dept | Manage Course | None |
| Assignment Submission| None | None | None | Submit Self |
| AI Grade Forecast | View All | View Dept | View Course | View Self |
| Plagiarism Check | View All | View Dept | View Course | Preview Self |
