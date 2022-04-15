const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required:  [true, "Must provide a name"]
    },
    last_name: {
        type: String,
        required: [true, "Please provide your first name"]
    },
    email: {
        type: String,
        required: [true, "Please provide your an email address"]
    },
    password: {
        type: String,
        required:  [true, "Please choose a password"]
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;