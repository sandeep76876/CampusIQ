// Users and role management service layer
const { query } = require('../../config/db.config');

class UsersService {
  async findAll({ role, page = 1, limit = 50 }) {
    let sql = 'SELECT id, email, role, first_name, last_name, department, phone_number, is_active, created_at FROM users';
    const params = [];

    if (role) {
      sql += ' WHERE role = $1';
      params.push(role.toUpperCase());
    }

    sql += ' ORDER BY created_at DESC';

    const { rows } = await query(sql, params);
    return rows.map(u => ({
      id: u.id,
      email: u.email,
      role: u.role,
      firstName: u.first_name,
      lastName: u.last_name,
      department: u.department,
      phoneNumber: u.phone_number,
      isActive: u.is_active,
      createdAt: u.created_at
    }));
  }

  async findById(id) {
    const { rows } = await query(`
      SELECT id, email, role, first_name, last_name, department, phone_number, is_active, created_at
      FROM users
      WHERE id = $1
    `, [id]);

    if (rows.length === 0) {
      const error = new Error('User not found.');
      error.statusCode = 404;
      throw error;
    }

    const u = rows[0];
    return {
      id: u.id,
      email: u.email,
      role: u.role,
      firstName: u.first_name,
      lastName: u.last_name,
      department: u.department,
      phoneNumber: u.phone_number,
      isActive: u.is_active,
      createdAt: u.created_at
    };
  }

  async updateRole(id, newRole) {
    const validRoles = ['ADMIN', 'HOD', 'TEACHER', 'STUDENT'];
    const normalizedRole = newRole.toUpperCase();
    if (!validRoles.includes(normalizedRole)) {
      const error = new Error(`Invalid role '${newRole}'. Allowed: ${validRoles.join(', ')}`);
      error.statusCode = 400;
      throw error;
    }

    const { rows } = await query(`
      UPDATE users
      SET role = $1
      WHERE id = $2
      RETURNING id, email, role, first_name, last_name
    `, [normalizedRole, id]);

    if (rows.length === 0) {
      const error = new Error('User not found.');
      error.statusCode = 404;
      throw error;
    }

    return rows[0];
  }

  async updateStatus(id, isActive) {
    const { rows } = await query(`
      UPDATE users
      SET is_active = $1
      WHERE id = $2
      RETURNING id, email, role, is_active
    `, [Boolean(isActive), id]);

    if (rows.length === 0) {
      const error = new Error('User not found.');
      error.statusCode = 404;
      throw error;
    }

    return rows[0];
  }
}

module.exports = new UsersService();
