const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Locations extends Model { }


Locations.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "location",
    }
)

module.exports = Locations