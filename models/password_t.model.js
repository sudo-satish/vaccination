const mongoose = require('mongoose');
const passwordSchema = require('./schemas/password.schema');


mongoose.connect('mongodb://127.0.0.1:27017/my_db');
var passwordModel = mongoose.model('password_t', passwordSchema);

module.exports = { passwordModel }