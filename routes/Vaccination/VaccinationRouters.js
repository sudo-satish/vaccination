const express = require('express');
const VaccinationRouters = express.Router();

VaccinationRouters.use((req, res, next) => {
    next();
    //res.send('Default Req Handler.');
});

VaccinationRouters.get('/', (req, res) => {
    res.render('vaccination/index', { childName: 'satish', dob: '9-Dec-1995', clientName: 'FlexiEle', name: 'Girijesh Gupta', phoneNumber: '9958000332', emailId: 'satishkumr001@gmail.com', days: '90' });
});

VaccinationRouters.get('/search', (req, res) => {
    //res.render('vaccination/search', { childName: 'satish', dob: '9-Dec-1995', clientName: 'FlexiEle', name: 'Girijesh Gupta', phoneNumber: '9958000332', emailId: 'satishkumr001@gmail.com', days: '90' });
    res.render('vaccination/search', { childName: 'satish', dob: '9-Dec-1995' });
    
});

VaccinationRouters.use((err, req, res, next) => {
    res.send('This is Auth default error handler', err); // TODO : Make a error logger
    //return next(err);
});
module.exports = { VaccinationRouters };