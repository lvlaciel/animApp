const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"user",
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				allowNull: false,
				primaryKey: true,
			},
			user: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING,
			},
			mail: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			userVerificate: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
				allowNull: false,
			},
			profilePhoto: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			cartShop: {
				type: DataTypes.ARRAY(DataTypes.STRING),
			},
			favorite: {
				type: DataTypes.JSONB,
				allowNull: true,
			},
			RGBpoint: {
				type: DataTypes.INTEGER,
				defaultValue: 0
			},
			isAdmin: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
				allowNull: false,
			},
			LogGoogle: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
				allowNull: false,
			},
			shoppingHistory: {
				type: DataTypes.JSONB,
			},
			disabled: {
			  type: DataTypes.BOOLEAN,
			  allowNull: false,
			  defaultValue: false
			},
			lastVisited :{
				type: DataTypes.ARRAY(DataTypes.STRING),
				defaultValue:[]
			},
		},
		{
			timestamps: false,
		}
	);
};
