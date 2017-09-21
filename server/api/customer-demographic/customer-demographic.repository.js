const CustomerDemographic = require('./customer-demographic.model');

module.exports = {
  get() {
    return CustomerDemographic.find();
  },
  getById(id) {
    return CustomerDemographic.findById(id)
          
          .populate('customers')
  },
  add(customerDemographic) {
    const _customerDemographic = new CustomerDemographic(customerDemographic);
    return _customerDemographic.save();
  },
  update(id, customerDemographic) {
    return CustomerDemographic.findByIdAndUpdate(id, customerDemographic, { new: true, runValidators: true });
  },
  remove(id) {
    return CustomerDemographic.findByIdAndRemove(id);
  }
};
