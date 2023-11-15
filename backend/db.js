import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const host = process.env.HOST;
const user = process.env.MYSQLUSER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;

const db = mysql.createConnection({
  user: user,
  host: host,
  password: password,
  database: database,
});

export { db };
