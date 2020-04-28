const { Model, DataTypes } = require("sequelize");

class Tech extends Model {
  static init(sequelize) {

    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        tableName:'techs', //força a achar nome da tabela 
      }
    );
  }
  static associate(models){
    this.belongsToMany(models.Users,{foreignKey: 'tech_id',through:'user_techs', as: 'users'})
  }
}

module.exports = Tech
