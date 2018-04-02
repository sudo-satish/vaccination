const mongoose = require('mongoose');
const { userSchema } = require('./user.schema');

const passwordSchema = { user: {type: userSchema, required:true}, password: {type: String, required :true} };
module.exports = mongoose.Schema(passwordSchema);
