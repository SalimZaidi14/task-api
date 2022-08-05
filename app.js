require('dotenv').config()
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const port = process.env.PORT || 4000;
const taskRouter = require('./routes/task');
const authRouter = require('./routes/auth-register');
const authenticationMiddleware = require('./middleware/authentication');

app.use(express.json());
app.use('/api/v1/signup', authRouter);
app.use('/api/v1/tasks', authenticationMiddleware, taskRouter);

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