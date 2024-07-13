import pool from './init.js';

export async function createUserTables() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        user_id BIGINT UNIQUE NOT NULL,
        username TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('User table created or already exists');
  } catch (err) {
    console.error('Error creating user table:', err);
  } finally {
    client.release();
  }
}

export async function saveUser(userId, username) {
  const client = await pool.connect();
  try {
    await client.query(
      'INSERT INTO users (user_id, username) VALUES ($1, $2) ON CONFLICT (user_id) DO NOTHING',
      [userId, username]
    );
  } catch (err) {
    console.error('Error saving user:', err);
  } finally {
    client.release();
  }
}


export async function updateUserLanguage(userId, language) {
    const client = await pool.connect();
    try {
      await client.query(
        'UPDATE users SET language = $1 WHERE user_id = $2',
        [language, userId]
      );
    } catch (err) {
      console.error('Error updating user language:', err);
    } finally {
      client.release();
    }
  }
  
  export async function toggleUserNotifications(userId) {
    const client = await pool.connect();
    try {
      await client.query(
        'UPDATE users SET notifications_enabled = NOT notifications_enabled WHERE user_id = $1',
        [userId]
      );
    } catch (err) {
      console.error('Error toggling user notifications:', err);
    } finally {
      client.release();
    }
  }
  