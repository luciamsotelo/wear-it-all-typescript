import { DataTypes, Model, Sequelize } from "sequelize";

interface ItemsAttributes {
  item_id: number;
  name: string;
  zipcode: number;
  description: string;
  price: number;
  image: string;
}

module.exports = (sequelize: Sequelize, DataTypes: DataTypes) => {
  class Items extends Model<ItemsAttributes> {
    static associate(models: any) {
      // define association here
    }
  }

  Items.init<ItemsAttributes>(
    {
      item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zipcode: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Items",
      tableName: "items",
      timestamps: false,
    }
  );

  return Items;
};
