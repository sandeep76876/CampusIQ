-- Database Schema: Attendance Tracking and Student Marks
CREATE TYPE attendance_state AS ENUM ('PRESENT', 'ABSENT', 'LATE', 'EXCUSED');

CREATE TABLE attendance (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    attendance_date DATE NOT NULL,
    status attendance_state NOT NULL DEFAULT 'PRESENT',
    source VARCHAR(50) DEFAULT 'MANUAL', -- 'MANUAL' or 'OCR'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (course_id, student_id, attendance_date)
);

CREATE TABLE marks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    assessment_type VARCHAR(50) NOT NULL, -- 'MIDTERM', 'FINAL', 'QUIZ', 'ASSIGNMENT'
    score_obtained NUMERIC(5, 2) NOT NULL,
    maximum_score NUMERIC(5, 2) NOT NULL,
    weightage_percent NUMERIC(5, 2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
