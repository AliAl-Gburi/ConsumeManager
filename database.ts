import * as dotenv from 'dotenv';
dotenv.config();

const pgp = require('pg-promise')(/* options */)
const db = pgp(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB}`)

export { db };


