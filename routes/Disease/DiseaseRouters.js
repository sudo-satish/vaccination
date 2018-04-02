const express = require('express');
const DiseaseRouters = express.Router();

DiseaseRouters.use((req, res, next) => {
    next();
    //res.send('Default Req Handler.');
});
DiseaseRouters.get('/', (req, res) => {
    res.render('disease/index', { customer: { childName: 'satish', dob: '9-Dec-1995', clientName: 'FlexiEle', name: 'Girijesh Gupta', phoneNumber: '9958000332', emailId: 'satishkumr001@gmail.com', days: '90' }, diseaseArr: [{ id: 1, shortDesc: 'Cough', desc: 'This is descryption', doctors: { name: 'Dr. R.K. Singh', hospital: { name: 'R.K. Clinic' } }, months: 3 }, { id: 2, shortDesc: 'Fever', desc: 'Fever of 104 F.', doctors: { name: 'Dr. Vashishtha', hospital: { name: 'Vashistha Clinic' } }, months: 7 }] });
    //res.send('Disease Index Page'); // 
});
// DiseaseRouters.get('/login', (req, res) => {
//     res.send('Disease  Page'); // 
// });

DiseaseRouters.use((err, req, res, next) => {
    res.send('This is Auth default error handler', err); // TODO : Make a error logger
    //return next(err);
});
module.exports = { DiseaseRouters };