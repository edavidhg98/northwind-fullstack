const Category = require('./category.model');

module.exports = {
  get() {
    return Category.find();
  },
  getById(id) {
    return Category.findById(id)
          
          .populate('products')
  },
  add(category) {
    const _category = new Category(category);
    return _category.save();
  },
  update(id, category) {
    return Category.findByIdAndUpdate(id, category, { new: true, runValidators: true });
  },
  remove(id) {
    return Category.findByIdAndRemove(id);
  }
};
