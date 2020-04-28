const express = require("express");

const routes = express.Router();
const UserController = require("./controller/UserController");
const AddressController = require("./controller/AddressController");
const TechController = require('./controller/TechController');
const ReportController = require('./controller/ReportController')

//Users Controllers
routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

//Address Controllers
routes.post('/users/:user_id/address', AddressController.store)
routes.get('/users/:user_id/address', AddressController.index)

//Techs Controllers
routes.post('/users/:user_id/techs', TechController.store)
routes.get('/users/:user_id/techs', TechController.index)
routes.delete('/users/:user_id/techs', TechController.delete)

//Report Controllers
routes.get('/report', ReportController.show)



module.exports = routes;
