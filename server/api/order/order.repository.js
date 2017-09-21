const Order = require('./order.model');

module.exports = {
  get() {
    return Order.find();
  },
  getById(id) {
    return Order.findById(id)
          .populate('customer').populate('employee').populate('shipper')
          .populate('orderDetails')
  },
  add(order) {
    const _order = new Order(order);
    return _order.save();
  },
  update(id, order) {
    return Order.findByIdAndUpdate(id, order, { new: true, runValidators: true });
  },
  remove(id) {
    return Order.findByIdAndRemove(id);
  }
};
