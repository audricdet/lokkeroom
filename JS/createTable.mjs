import * as dotenv from 'dotenv'

import pkg from 'pg';

const {Client} = pkg;

// Client est le pont entre mon code et ma database

const client = new Client({
    user: 'audricdetrez',
    host: 'localhost',
    database: 'lokkeroom',
    password: process.env.DATABASE_PWD,
    port: 5432,
});

// Connection a la database 

client.connect((err) => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('connected')
    }
});

// Create tables

const createTableUser = `
CREATE TABLE IF NOT EXISTS "users" (
    "id" SERIAL,
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR(50) NOT NULL 
);`

client.query(createTableUser, (err, res) => {
    if (err) throw err
    console.log(res)
})

const createTableLobby = `
CREATE TABLE IF NOT EXISTS "lobby" (
    "id" SERIAL,
    "name" VARCHAR(50)
);`

client.query(createTableLobby, (err, res) => {
    if (err) throw err
    console.log(res)
})

const createTableMessage = `
CREATE TABLE IF NOT EXISTS "messages" (
    "id" SERIAL, 
    "message" VARCHAR(180)
);`

client.query(createTableMessage, (err, res) => {
    if (err) throw err
    console.log(res)
})

