const { StatusCodes } = require('http-status-codes');
const taskModel = require('../models/Task');

const getAllTasks = (req, res) => {
    res.status(StatusCodes.OK).send('Get all tasks');
}

const getTask = (req, res) => {
    res.status(StatusCodes.OK).send('Get task');
}

const createTask = (req, res) => {
    res.status(StatusCodes.OK).send('Create task');
}

const updateTask = (req, res) => {
    res.status(StatusCodes.OK).send('Update task');
}

const deleteTask = (req, res) => {
    res.status(StatusCodes.OK).send('Delete task');
}

module.exports = {
    getAllTasks, getTask, createTask, updateTask, deleteTask
}