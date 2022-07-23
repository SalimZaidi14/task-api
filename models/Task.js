const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    task: {
        type: String,
        required: [true, ['Please provide a task name']],
    },
    completed : {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('TaskSchema', TaskSchema);