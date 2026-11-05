-- Development Seed: Default Roles and Administrative Users
INSERT INTO roles (name, description) VALUES
('ADMIN', 'Full system access and institutional governance'),
('HOD', 'Head of Department overseeing faculty and syllabi'),
('TEACHER', 'Faculty recording attendance, marks, and assignments'),
('STUDENT', 'Enrolled student accessing courses and viewing marks')
ON CONFLICT (name) DO NOTHING;
