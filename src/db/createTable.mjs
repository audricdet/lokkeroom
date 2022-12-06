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
    "id" SERIAL PRIMARY KEY NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    UNIQUE (email)
);`

client.query(createTableUser, (err, res) => {
    if (err) throw err
    console.log(res)
})

const createTableLobby = `
CREATE TABLE IF NOT EXISTS "lobby" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "user_id" INT,
    FOREIGN KEY(user_id)
    REFERENCES users(id)
);`

client.query(createTableLobby, (err, res) => {
    if (err) throw err
    console.log(res)
})

const createTableMessage = `
CREATE TABLE IF NOT EXISTS "messages" (
    "id" SERIAL PRIMARY KEY NOT NULL, 
    "message" VARCHAR(180) NOT NULL,
    "user_id" INT,
    "lobby_id" INT,
    FOREIGN KEY(user_id)
    REFERENCES users(id),
    FOREIGN KEY(lobby_id)
    REFERENCES lobby(id)
);`

client.query(createTableMessage, (err, res) => {
    if (err) throw err
    console.log(res)
})


const createUsersPerlobby = `
CREATE TABLE IF NOT EXISTS "users_per_lobby" (
    "id" SERIAL NOT NULL,
    "user_id" INT,
    "lobby_id" INT,
    FOREIGN KEY(user_id)
    REFERENCES users(id),
    FOREIGN KEY(lobby_id)
    REFERENCES lobby(id)
);`

client.query(createUsersPerlobby, (err, res) => {
    if (err) throw err
    console.log(res)
})