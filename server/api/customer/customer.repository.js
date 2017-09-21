const Customer = require('./customer.model');

module.exports = {
  get() {
    return Customer.find();
  },
  getById(id) {
    return Customer.findById(id)
          
          .populate('orders').populate('customerDemographics')
  },
  add(customer) {
    const _customer = new Customer(customer);
    return _customer.save();
  },
  update(id, customer) {
    return Customer.findByIdAndUpdate(id, customer, { new: true, runValidators: true });
  },
  remove(id) {
    return Customer.findByIdAndRemove(id);
  }
};
