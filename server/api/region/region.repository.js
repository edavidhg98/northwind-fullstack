const Region = require('./region.model');

module.exports = {
  get() {
    return Region.find();
  },
  getById(id) {
    return Region.findById(id)
          
          .populate('territorys')
  },
  add(region) {
    const _region = new Region(region);
    return _region.save();
  },
  update(id, region) {
    return Region.findByIdAndUpdate(id, region, { new: true, runValidators: true });
  },
  remove(id) {
    return Region.findByIdAndRemove(id);
  }
};
