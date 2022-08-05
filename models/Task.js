const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
        taskName: {
            type: String,
            required: [true, 'Please provide a task name'],
        },
        completed: {
            type: Boolean,
            default: false,
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: [true, 'Please provide user']
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('TaskSchema', TaskSchema);