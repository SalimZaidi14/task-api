const express = require('express');
const Router = express.Router();
const { getAllTasks, getTask, createTask, updateTask, deleteTask } = require('../controllers/tasks');

Router.route('/').get(getAllTasks).post(createTask);
Router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = Router;