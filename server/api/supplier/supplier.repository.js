const Supplier = require('./supplier.model');

module.exports = {
  get() {
    return Supplier.find();
  },
  getById(id) {
    return Supplier.findById(id)
          
          .populate('products')
  },
  add(supplier) {
    const _supplier = new Supplier(supplier);
    return _supplier.save();
  },
  update(id, supplier) {
    return Supplier.findByIdAndUpdate(id, supplier, { new: true, runValidators: true });
  },
  remove(id) {
    return Supplier.findByIdAndRemove(id);
  }
};
