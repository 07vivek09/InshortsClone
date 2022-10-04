import express from 'express'
import dotenv from 'dotenv';

import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import defaultData from './default.js';
import Route from './routes/route.js';

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/', Route);

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
}

const PORT = process.env.PORT || 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb://${username}:${password}@ac-2ysgxql-shard-00-00.golpsqd.mongodb.net:27017,ac-2ysgxql-shard-00-01.golpsqd.mongodb.net:27017,ac-2ysgxql-shard-00-02.golpsqd.mongodb.net:27017/?ssl=true&replicaSet=atlas-65ii23-shard-0&authSource=admin&retryWrites=true&w=majority`

Connection(URL);

app.listen(PORT, ()=>{console.log(`server is running succsfully at port ${PORT}`)})

defaultData();