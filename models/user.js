const mongoose = require('mongoose');
const { use } = require('passport');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
})
mongoose.model('users', userSchema);