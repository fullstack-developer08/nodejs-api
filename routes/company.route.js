const express = require('express');
const Router = express.Router();
const companyController = require('../controllers/company.controller');

Router.get('/', companyController.find);
Router.get('/:id', companyController.findById);
Router.post('/', companyController.create);
Router.put('/:id', companyController.update);
Router.delete('/:id', companyController.delete);

module.exports = Router;    