// Import modules
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, unique: true, require: true },
    password: { type: String, require: true },
    mobile: { type: String }
    // mobile_otp: { type: String, default: null, require: true }
}, {
    timestamps: true
});

const User = mongoose.model('user', userSchema);

module.exports = User;