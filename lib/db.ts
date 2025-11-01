import { Pool } from 'pg';

// Initialize a connection pool to your PostgreSQL database.
// The DATABASE_URL environment variable should contain the connection string.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Helper function for executing SQL queries.
export async function query(text: string, params?: any[]) {
  return pool.query(text, params);
}
