const express = require('express');
const FilesRoutes = express.Router();

const events = require('events');
const eventEmitter = new events.EventEmitter();

const fs = require('fs');

var myEventHandler = function() {
    console.log('Event Occured.');
};

FilesRoutes.get('/', (req, res) => {
    var data1;
    // fs.readFile('./playground/files/file1.txt', (err, data) => {
    //     res.write(data);
    //     res.end();
    //     //console.log(data);
    //     //data1 = data;
    // });
    // var data = fs.readFileSync('./playground/files/file1.txt');
    // res.write(data);
    // res.end();

    
    res.send('end'); 
});

FilesRoutes.get('/event', (req, res) => {
    eventEmitter.on('scream', myEventHandler);
    eventEmitter.emit('scream');

    res.send('satish');
});

module.exports = { files: FilesRoutes };