const express = require('express');
const AppRouter = express.Router();

const { UserRoutes } = require('./UserRoutes');
const { PlaygroundRoutes } = require('../playground/index');
const { AuthRouters } = require('./Auth/AuthRouters');
const { DiseaseRouters } = require('./Disease/DiseaseRouters');
const { VaccinationRouters } = require('./Vaccination/VaccinationRouters');

const OrderRouters = require('./Order/OrderRouters').Routers;
const ItemRouters = require('./Product/ItemRouters').Routers;

AppRouter.get('/', (req, res) => {
    res.send('Home page main router');
});

AppRouter.use('/playground', PlaygroundRoutes);
AppRouter.use('/user', UserRoutes);
AppRouter.use('/auth', AuthRouters);
AppRouter.use('/disease', DiseaseRouters);
AppRouter.use('/vaccination', VaccinationRouters);
AppRouter.use('/order', OrderRouters);
AppRouter.use('/item', ItemRouters);

module.exports = { AppRouter };