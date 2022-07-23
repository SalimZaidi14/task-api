const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const schema = mongoose.Schema;

const UserSchema = new schema ({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        maxlenght: 20,
        minlength: 1,
    },
    email: {
        type: String,
        required: [true, 'Please provide email address'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        maxlength: 15,
        minlength: 5
    }
})