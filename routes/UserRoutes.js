const express = require('express');
const UserRoutes = express.Router();
const { userModel } = require('../models/users.model');
const _ = require('lodash');
    
  UserRoutes.get('/', (req, res) => {
    
    userModel.find().then((data) => {
      res.render('users/index', {data});
    }, (err) => {
      res.render('users/index');
    });
    
  });
  UserRoutes.get('/me', (req, res) => {

    var token = req.header('x-auth');

    userModel.findByToken(token).then((data) => {
      if(!data) {
        return Promise.reject('User not found !!');
      }
      console.log('user find', data);
      res.send(data.toResJson());
    }).catch((err) => {
      console.log(err);
      res.status(401).send(err);
      //res.render('users/index');
    });
  });

  UserRoutes.get('/:id', (req, res) => {
    res.send('get user with id => '+ req.params.id);
  });
  UserRoutes.post('/', (req, res) => {
    var body = _.pick(req.body, ['email', 'password', 'type']);

    //var name = req.body.name;
    //var type = req.body.type;

    // var user = new userModel({name, type});
    var user = new userModel(body);
    user.save().then(() => {
      return user.generateAuthToken();
    }).then((token) => {
      res.header('x-auth', token).send(user.toResJson());
    }).catch((e) => {
      res.status(400).send(e);
    });
    /*
    user.save((err, person) => {
      if(err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.send(person);
      }

    });
    */

  });
  UserRoutes.put('/:id', (req, res) => {
    console.log('get user with id => ', req.params.id);
    res.send('get user with id => '+ req.params.id);
  });
  UserRoutes.delete('/:id', (req, res) => {
    console.log('get user with id => ', req.params.id);
    res.send('get user with id => '+ req.params.id);
  });


module.exports = {UserRoutes};
