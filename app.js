require('dotenv').config()
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const port = process.env.PORT || 4000;
const task = require('./routes/task');
const authRegister = require('./routes/auth-register');

app.use(express.json());
app.use('/api/v1/tasks', task);
app.use('/api/v1/signup', authRegister);

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();