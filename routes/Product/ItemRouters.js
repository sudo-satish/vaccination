const express = require('express');
const Routers = express.Router();

Routers.use((req, res, next) => {
    next();
    //res.send('Default Req Handler.');
});

Routers.get('/', (req, res) => {
    res.send('Item Routes');
    //res.render('vaccination/index', { childName: 'satish', dob: '9-Dec-1995', clientName: 'FlexiEle', name: 'Girijesh Gupta', phoneNumber: '9958000332', emailId: 'satishkumr001@gmail.com', days: '90' });
});

Routers.get('/search', (req, res) => {
    //res.render('vaccination/search', { childName: 'satish', dob: '9-Dec-1995', clientName: 'FlexiEle', name: 'Girijesh Gupta', phoneNumber: '9958000332', emailId: 'satishkumr001@gmail.com', days: '90' });
    res.render('vaccination/search', { childName: 'satish', dob: '9-Dec-1995' });
    
});

Routers.use((err, req, res, next) => {
    res.send('This is Auth default error handler', err); // TODO : Make a error logger
    //return next(err);
});
module.exports = { Routers };