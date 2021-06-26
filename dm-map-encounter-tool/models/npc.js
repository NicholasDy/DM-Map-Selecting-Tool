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
        terrainId: {
            type: DataTypes.INTEGER,
            references: {
                model: "location",
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "npc",
    }
)

module.exports = Npc