const Shipper = require('./shipper.model');

module.exports = {
  get() {
    return Shipper.find();
  },
  getById(id) {
    return Shipper.findById(id)
          
          .populate('orders')
  },
  add(shipper) {
    const _shipper = new Shipper(shipper);
    return _shipper.save();
  },
  update(id, shipper) {
    return Shipper.findByIdAndUpdate(id, shipper, { new: true, runValidators: true });
  },
  remove(id) {
    return Shipper.findByIdAndRemove(id);
  }
};
