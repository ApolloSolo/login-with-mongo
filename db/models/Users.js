const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required:  [true, "Must provide a username"]
    },
    email: String,
    password: {
        type: String,
        required:  [true, "Must provide a password"]
    },
    age: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;