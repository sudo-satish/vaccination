const express = require('express');
const PlaygroundRoutes = express.Router();

const { files } = require('./files/index');
const { password } = require('./password/index');
const { hashing } = require('./hashing/index');
PlaygroundRoutes.get('/', (req, res) => {
    res.send('Home page');
});

PlaygroundRoutes.use('/files', files);
PlaygroundRoutes.use('/password', password);
PlaygroundRoutes.use('/hashing', hashing);

module.exports = { PlaygroundRoutes };
