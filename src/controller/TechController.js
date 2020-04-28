const Tech = require("../models/Tech");

const Users = require("../models/Users");

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;
    const user = await Users.findByPk(user_id, {
      include: {
       association: "techs",
       attributes:['name'], //trazer somente nomes
       through:{
         attributes:[]  //remover dados da tabela pivot 
      }},
    });

    return res.json(user.techs);
  },
  async store(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await Users.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "user not found" });
    }

    const [tech] = await Tech.findOrCreate({
      where: { name },
    });

    await user.addTech(tech);

    return res.json(tech);
  },
  async delete(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await Users.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "user not found" });
    }

    const tech = await Tech.findOne({
      where: { name },
    });

    await user.removeTech(tech);
    return res.json({ sucess: "Tech deleted" });
  },
};
