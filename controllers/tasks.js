const taskModel = require('../models/Task');
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllTasks = async (req, res) => {
  const task = await taskModel.find({ createdBy: req.user.userId }).sort('createdAt')
  res.status(StatusCodes.OK).json({ task, count: jobs.length })
}
const getTask = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req

  const task = await taskModel.findOne({
    _id: taskId,
    createdBy: userId,
  })
  if (!task) {
    throw new NotFoundError(`No task with id ${taskId}`)
  }
  res.status(StatusCodes.OK).json({ task })
}

const createTask = async (req, res) => {
  req.body.createdBy = req.user.userId
  const task = await taskModel.create(req.body)
  res.status(StatusCodes.CREATED).json({ task })
}

const updateTask = async (req, res) => {
    const { 
        body: { taskName, completed }, 
        user: {userId}, 
        params: { id: taskId }
    } = req;

    if (taskName === "") {
        throw new BadRequestError('Task name cannot be empty');
    }

    const task = await taskModel.findByIdAndUpdate(
        { _id: taskId, createdBy: userId },
        req.body,
        {new: true, runValidators: true}
    )
    if (!task) {
        throw new NotFoundError(`No task with id ${taskId}`);
    }
    res.status(StatusCodes.OK).json({ task });
}

const deleteTask = async (req, res) => {
  const {
    user: { userId },
    params: { id: taskId },
  } = req

  const task = await taskModel.findByIdAndRemove({
    _id: taskId,
    createdBy: userId,
  })
  if (!task) {
    throw new NotFoundError(`No job with id ${taskId}`)
  }
  res.status(StatusCodes.OK).send()
}

module.exports = {
    getAllTasks, getTask, createTask, updateTask, deleteTask
}