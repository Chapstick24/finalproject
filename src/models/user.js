const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: 'Enter your first name'
    },

    lastName: {
        type: String,
        trim: true,
        required: 'Enter your last name'
    },

    email: {
        type: String,
        unique: true,
        required: 'Please enter your email address for you account',
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    password: {
        type: String,
        required: 'Please enter a password for your account',
        validate: [({length}) => length >= 8, "Make sure password is at least 8 characters"]

    },

});


const User = mongoose.model("User", userSchema);

module.exports = User;