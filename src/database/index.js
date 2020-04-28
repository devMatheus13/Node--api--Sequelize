const Sequelize = require("sequelize");

const dbConfig = require("../config/database");

const Users = require("../models/Users");
const Address = require("../models/Address");
const Tech = require('../models/Tech')
const connection = new Sequelize(dbConfig);

Users.init(connection);
Address.init(connection);
Tech.init(connection);

Users.associate(connection.models);
Address.associate(connection.models);
Tech.associate(connection.models);
module.exports = connection;
