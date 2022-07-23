require('dotenv').config()
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const port = 4000;
const task = require('./routes/task');

app.use(express.json());
app.use('/api/v1/tasks', task);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, `Server listening at port ${port}`);
    } catch (error) {
        console.log(error);   
    }
}

start();