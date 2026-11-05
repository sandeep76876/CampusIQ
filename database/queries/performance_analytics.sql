-- Reusable SQL Query: Department-wise average marks and distribution
SELECT 
    d.name AS department_name,
    c.title AS course_title,
    AVG(m.score_obtained / m.maximum_score * 100) AS average_percentage
FROM departments d
JOIN courses c ON d.id = c.department_id
JOIN marks m ON c.id = m.course_id
GROUP BY d.name, c.title;
