const mongoose = require('mongoose');

const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const userSchema = mongoose.Schema(
    { 
        name: String, 
        type: String,
        email: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            unique: true,
            validate: {
                validator: validator.isEmail,
                message: `{VALUE} is not an valid email`
            }
        },
        password: {
            type: String,
            require: true,
            minlength: 6,
        },
        tokens: [{
            access: {
                type: String,
                required: true
            },
            token: {
                type: String,
                required: true
            }
        }]
    });

    userSchema.statics.findByEmailPassword = function(email, password) {
        var user = this;
        return this.findOne({
            'email': email,
            'password': password
        });
    };
    
    userSchema.statics.findByToken = function(token) {
        var user = this;
        var decoded;
        try {
            decoded = jwt.verify(token, 'secret');
        } catch (error) {
            return Promise.reject('Failed to verify token');
        }

        return this.findOne({
            '_id': decoded._id,
            'tokens.token': token,
            'tokens.access':'auth'
        });
    };

    userSchema.methods.toResJson = function() {
        var userObj = this.toObject();
        return _.pick(userObj, ['_id', 'email', ])
    };
    userSchema.methods.generateAuthToken = function() {
        var user = this;
        var access = 'auth';
        var token = jwt.sign({_id: user._id.toHexString(), access}, 'secret').toString();

        this.tokens.push({access, token});
        return this.save().then(() => {
            return token;
        });
    }
module.exports = { userSchema };