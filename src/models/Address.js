const { Model, DataTypes } = require("sequelize");

class Address extends Model {
  static init(sequelize) {

    super.init(
      {
        zipcode: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models){
    this.belongsTo(models.Users,{foreignKey: 'user_id', as: 'onwer'})
  }
}

module.exports = Address
