const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Maps extends Model { }


Maps.init(
    {
        id: {
            type: DataTypes.BLOB,
        }
    }
)

//saving the image type to the model, and this is going to be sent to cloudinary 