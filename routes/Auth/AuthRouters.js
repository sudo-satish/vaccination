const express = require('express');
const AuthRouters = express.Router();
const { userModel } = require('../../models/users.model');
const _ = require('lodash');

AuthRouters.use((req, res, next) => {
    next();
    //res.send('Default Req Handler.');
});
AuthRouters.get('/', (req, res) => {
    res.render('auth/login'); // 
});
AuthRouters.get('/login', (req, res) => {
    res.render('auth/login'); // 
});
AuthRouters.get('/logout', (req, res) => {
    req.session.user = null;
    req.session.destroy();
    res.render('auth/login'); // 
});
AuthRouters.post('/logout', (req, res) => {
    req.session.user = null;
    req.session.destroy();
    res.render('auth/login'); // 
});

AuthRouters.get('/signup', (req, res) => {
    res.render('auth/signup');
});
AuthRouters.post('/signup', (req,res) => {
    var body = _.pick(req.body, ['email', 'password', 'type']);
    body.type= 'user';
    
    var user = new userModel(body);
    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user.toResJson());
    }).catch((e) => {
        res.status(400).send(e);
    });
});

AuthRouters.put('/signup', (req,res) => {
    res.send('PUT');
});

AuthRouters.delete('/signup', (req, res) => {
    res.send('DELETE');
});

AuthRouters.copy('/signup', (req, res) => {
    res.send('COPY METHOD');
});
AuthRouters.get('/check-auth', (req, res) => {
    //console.log(req.session.user);
     
    res.send(JSON.stringify(req.session.user));
    // res.render('auth/login'); // 
});
AuthRouters.post('/login', (req, res) => {
    var {email,password} = _.pick(req.body, ['email','password']);

    console.log('Id => ', email, ', Password => ', password);
    userModel.findByEmailPassword(email, password).then((data) => {

        if (!data) {
            req.session.user = data;
            res.render('auth/login', {error:'User Not found !!! '});
            //return Promise.reject('User not found !!');
        } else {
            req.session.user = data;
            res.render('auth/login',{message:'You are login now !!! '});
        }
    }).catch((err) => {
        console.log(err);
        //res.status(401).send(err);
        res.status(401).render('auth/login', {error:'Some technical error happend!!!'});
        //res.render('users/index');
    });

    // Find user by email and password. 
    // If found then set user in session.
    // IF not then send message that user is not found.

   // var id = _.pick(req, ['id']);
    //res.send('Post user');
});

AuthRouters.use((err, req, res, next) => {
    console.log(err);
    
    res.send('This is Auth default error handler'); // TODO : Make a error logger
    //return next(err);
});
module.exports = { AuthRouters };