-- Reusable SQL Query: Calculate student attendance percentage per course
SELECT 
    s.id AS student_id,
    s.first_name,
    s.last_name,
    c.code AS course_code,
    COUNT(a.id) AS total_sessions,
    SUM(CASE WHEN a.status = 'PRESENT' THEN 1 ELSE 0 END) AS attended_sessions,
    ROUND((SUM(CASE WHEN a.status = 'PRESENT' THEN 1 ELSE 0 END)::NUMERIC / NULLIF(COUNT(a.id), 0)) * 100, 2) AS attendance_percentage
FROM users s
JOIN enrollments e ON s.id = e.student_id
JOIN courses c ON e.course_id = c.id
LEFT JOIN attendance a ON a.student_id = s.id AND a.course_id = c.id
GROUP BY s.id, s.first_name, s.last_name, c.code;
