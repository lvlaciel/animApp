const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('anime', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: true
        },
        episode: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        studio: {
            type: DataTypes.STRING,
            allowNull: true
        },
        img: {
            type: DataTypes.STRING,
        },
        destacado: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        createdInDb: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    });
};