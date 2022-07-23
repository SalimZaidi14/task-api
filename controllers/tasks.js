const { StatusCodes } = require('http-status-codes');
const taskModel = require('../models/Task');

const getAllTasks = async (req, res) => {
    const task = await taskModel.find({});
    res.status(StatusCodes.OK).json({ task });
}

const getTask = async (req, res) => {
    const { id: taskId } = req.params;
    const task = await taskModel.findOne({ _id: taskId });
    if (!task) {
        res.status(StatusCodes.NOT_FOUND).json({ err: `Task with id ${taskId} not found` });
    }
    res.status(StatusCodes.OK).json({ task });
}

const createTask = async (req, res) => {
    const task = await taskModel.create(req.body);
    res.status(StatusCodes.OK).json({ task });
}

const updateTask = async (req, res) => {
    const { id: taskId } = req.params;
    const task = await taskModel.findByIdAndUpdate({ _id: taskId}, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(StatusCodes.OK).json({ task });
}

const deleteTask = async (req, res) => {
    const { id: taskId } = req.params;
    const task = await taskModel.findByIdAndDelete({ _id: taskId });
    res.status(StatusCodes.OK).json({ task });
}

module.exports = {
    getAllTasks, getTask, createTask, updateTask, deleteTask
}