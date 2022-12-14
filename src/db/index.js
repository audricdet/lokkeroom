import dotenv from 'dotenv'
import pkg from 'pg';

const {Client} = pkg;


const client = new Client({
    user: 'lokkeroom_admin',
    host: 'localhost',
    database: 'lokkeroom_db',
    password: process.env.DATABASE_PWD,
    port: 5432,
});

client.connect((err) => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('connected')
    }
});

export default client;