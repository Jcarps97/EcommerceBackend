// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'ProducttoCategory'
});

// Categories have many Products
Category.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'CategorytoProduct'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'ProducttoTag'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'TagtoProduct'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
