const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

 class Encounter extends Model{}

 Encounter.init(
     {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        mapLocation:{
            type: DataTypes.INTEGER, 
            references:{
                model: "location",
                key: "id"
            },
        }
     },
     {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "encounter",
    }
 )

 module.exports = Encounter