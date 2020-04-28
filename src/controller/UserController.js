const Users = require("../models/Users");
module.exports = {
  async index(req, res) {
    const users = await Users.findAll();

    return res.json(users);
  },
  async store(req, res) {
    const { name, email } = req.body;
    const user = await Users.create({ name, email });

    return res.json(user);
  },
};
