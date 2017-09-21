const OrderDetail = require('./order-detail.model');

module.exports = {
  get() {
    return OrderDetail.find();
  },
  getById(id) {
    return OrderDetail.findById(id)
          .populate('order').populate('product')
          
  },
  add(orderDetail) {
    const _orderDetail = new OrderDetail(orderDetail);
    return _orderDetail.save();
  },
  update(id, orderDetail) {
    return OrderDetail.findByIdAndUpdate(id, orderDetail, { new: true, runValidators: true });
  },
  remove(id) {
    return OrderDetail.findByIdAndRemove(id);
  }
};
