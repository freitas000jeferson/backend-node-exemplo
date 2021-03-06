const { encryptor } = require('../helpers');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      passwordResetToken: {
        type: DataTypes.STRING,
        field: 'password_reset_token',
      },
      birthDate: {
        type: DataTypes.DATE,
        field: 'birth_date',
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        field: 'is_active',
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        field: 'is_admin',
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
    },
    {
      tableName: 'users',
    }
  );
  User.associate = (models) => {
    models.User.hasMany(models.Rate, {
      as: 'rates',
      foreignKey: 'user_id',
      sourceKey: 'id',
    });
  };
  User.beforeSave(async (user, options) => {
    const password = await encryptor.hashPassword(user.password);
    if (user.changed('password')) {
      Object.assign(user, { password });
    }
    return user;
  });

  User.prototype.toJSON = function () {
    const user = { ...this.get() };
    return Object.fromEntries(
      Object.entries(user).filter(([key]) => !['password'].includes(key))
    );
  };

  return User;
};
