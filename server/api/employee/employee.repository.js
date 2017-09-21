const Employee = require('./employee.model');

module.exports = {
  get() {
    return Employee.find();
  },
  getById(id) {
    return Employee.findById(id)
          .populate('employee')
          .populate('employees').populate('orders').populate('territorys')
  },
  add(employee) {
    const _employee = new Employee(employee);
    return _employee.save();
  },
  update(id, employee) {
    return Employee.findByIdAndUpdate(id, employee, { new: true, runValidators: true });
  },
  remove(id) {
    return Employee.findByIdAndRemove(id);
  }
};
