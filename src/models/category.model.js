module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      name: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
    },
    { tableName: 'categories' }
  );
  Category.associate = (models) => {
    models.Category.belongsToMany(models.Movie, {
      through: 'category_movies',
      as: 'movies',
      foreignKey: 'category_id',
    });
  };
  Category.prototype.toJSON = function () {
    const category = { ...this.get() };
    return Object.fromEntries(Object.entries(category));
  };
  return Category;
};
