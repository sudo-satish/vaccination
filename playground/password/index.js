const express = require('express');
const PassRoutes = express.Router();

const { passwordModel } = require('../../models/password_t.model');
const { userModel } = require('../../models/users.model');
PassRoutes.get('/', (req, res) => {
    //var users = userModel.find();

    // userModel.find().then((data) => {
    //     console.log('data', data);
    //     res.render('users/index', { data });
    // }, (err) => {

    //     console.log('err = >', err);
    //     res.render('users/index');
    // });
    passwordModel.find().then((data) => {
        console.log('data', data);
        // res.render('users/index', { data });
    }, (err) => {

        console.log('err = >', err);
        // res.render('users/index');
    });

    //console.log(users);
    res.send('Check Log');
    //res.send('end'); 
});

module.exports = { password: PassRoutes };