const { Op } = require("sequelize");

const Tech = require("../models/Tech");

const User = require("../models/Users");

module.exports = {
  async show(req, res) {

    //consulta so funcionara se todos os dados forem achados
    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.like]: "%rockeseat.com.br",
        },
      },
      include: [
        { association: "addresses", where: { number: 357 } },
        { association: "techs",
         where:{ 
             name: {
            [Op.like]: 'React%',
        }}}
      ],
    });
    return res.json(users);
  },
};
