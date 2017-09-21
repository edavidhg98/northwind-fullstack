const Product = require('./product.model');

module.exports = {
  get() {
    return Product.find();
  },
  getById(id) {
    return Product.findById(id)
          .populate('category').populate('supplier')
          .populate('orderDetails')
  },
  add(product) {
    const _product = new Product(product);
    return _product.save();
  },
  update(id, product) {
    return Product.findByIdAndUpdate(id, product, { new: true, runValidators: true });
  },
  remove(id) {
    return Product.findByIdAndRemove(id);
  }
};
