const Territory = require('./territory.model');

module.exports = {
  get() {
    return Territory.find();
  },
  getById(id) {
    return Territory.findById(id)
          .populate('region')
          .populate('employees')
  },
  add(territory) {
    const _territory = new Territory(territory);
    return _territory.save();
  },
  update(id, territory) {
    return Territory.findByIdAndUpdate(id, territory, { new: true, runValidators: true });
  },
  remove(id) {
    return Territory.findByIdAndRemove(id);
  }
};
