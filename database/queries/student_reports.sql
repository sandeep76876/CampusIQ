-- Reusable SQL Query: Student comprehensive academic transcript report
SELECT 
    c.code AS course_code,
    c.title AS course_title,
    c.credits,
    AVG(m.score_obtained) AS average_score
FROM marks m
JOIN courses c ON m.course_id = c.id
WHERE m.student_id = :student_id
GROUP BY c.code, c.title, c.credits;
