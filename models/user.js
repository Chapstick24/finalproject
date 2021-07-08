const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const emailValidator = require('email-validator');
// const bcrypt = require('bcrypt');
const SALT_ROUNDS = 12;


const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true
    },

    lastName: {
        type: String,
        trim: true,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        
    },

    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
        
    }

});


const User = mongoose.model("User", userSchema);

module.exports = User;