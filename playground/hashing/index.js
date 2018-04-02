const express = require('express');
const PassRoutes = express.Router();

// const { SHA256 } = require('crypto-js');
 const jwt = require('jsonwebtoken');

// const { userModel } = require('../../models/users.model');

PassRoutes.get('/', (req, res) => {
    // var message = " Hello I a string ";
    // var crypt = SHA256(message).toString();

    var data = {
        email:'satish.kumar@gmail.com'
    };

    var token = jwt.sign(data,'somesecret');
    var returnObj = jwt.verify(token, 'somesecret');
    
    res.send(returnObj.email);
    res.send(JSON.stringify(returnObj));
    return;
    var data = {
        id: 4
    };

    var token = jwt.sign(data,'somesecret');
    console.log(token);
    
    var returnObj = jwt.verify(token, 'somesecret');
    console.log(returnObj);
    
    // console.log(1);
    
    // var token = {
    //     data,
    //     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
    // };
    // console.log(2);
    
    // var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString(); //Salting
    // console.log(3);
    
     var resMsg = " Default" ;
    // if(resultHash === token.hash) {
    //     //console.log('');
    //     resMsg = "Data is not modified";
    // } else {
    //     resMsg = "Data is modified";
    //     // console.log('Data is modified');
        
    // }
    // //console.log(crypt);
    
    res.send(resMsg);
});

module.exports = { hashing: PassRoutes };