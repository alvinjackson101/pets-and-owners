'use strict';

module.exports = (sequelize, DataTypes) => {
	const Vax = sequelize.define(
		'vax',
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4
			},
			name: {
				type: DataTypes.STRING,
				required: true
			},
			pet_id: {
				type: DataTypes.UUID,
				required: true,
				allowNull: false
			},
			administered: {
				type: DataTypes.STRING,
				required: true,
				allowNull: false
			},
			created_at: {
				type: DataTypes.DATE,
				allowNull: false
			},
			updated_at: DataTypes.DATE,
			deleted_at: DataTypes.DATE
		},
		{
			paranoid: true,
			underscored: true
		}
	);
	return Vax;
};
