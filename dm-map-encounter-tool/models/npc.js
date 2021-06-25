const { Model, Datatypes, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

class Npc extends Model { }

Npc.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }
)

module.exports = Npc