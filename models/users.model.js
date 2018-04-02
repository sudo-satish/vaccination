const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/my_db');
const { userSchema } = require('./schemas/user.schema.js');

var userModel = mongoose.model('user', userSchema);
module.exports = { userModel }