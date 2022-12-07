import express from 'express'

import dotenv from 'dotenv'
import pkg from 'pg';

const {Client} = pkg;

const router = express.Router()

const client = new Client({
    user: 'lokkeroom_admin',
    host: 'localhost',
    database: 'lokkeroom_db',
    password: process.env.DATABASE_PWD,
    port: 5432,
});


// Test

router.get('/test', function (req, response) {
    // connect to test table and retrieve all of its content
    client.connect((err) => {
        if (err) {
        console.log('connection error', err.stack)
        } else {
            console.log('connected')
        }
    })

    client.query('SELECT * FROM tests', (err, res) => {
        if (err) throw err
        response.send({connection: 'successful', connection_time: Date.now(), response: res})
        client.end()
    })
})

// Home

router.get("/", (request, response) => {
    response.json({ info: "Node.js, Express, and Postgres API" });
});

router.post("/", (req, res) => {
    console.log(req.body);
    console.log(res);
});

/*
// Register 

router.post( '/register' , registerUser )

// Login 

router.post( '/login' , loginUser )

// get lobby

router.get ( '/lobby/[lobby-id]' , getLobby )

// Get one message

router.get ( '/lobby/[lobby-id]/[message-id]' , getOneMessage )

// Post a message in the lobby

router.post( '/lobby/[lobby-id]' , postOneMessage )

// Get all users from lobby 

router.get( '/users' , getAllUsers )

// Get one user 

router.get ( '/users/[user-id]' , getOneUser )

// Add user to the lobby 

router.post( '/lobby/[lobby-id]/add-user' , addOneUser )

// Remove one user

router.post( '/lobby/[lobby-id]/remove-user' , removeOneUser )

// Edit one message 

router.patch( '/api/lobby/[message-id]' , editOneMessage )

// Delete one message

router.delete( '/api/messages/[message-id]' , removeOneMessage )
*/

export default router
