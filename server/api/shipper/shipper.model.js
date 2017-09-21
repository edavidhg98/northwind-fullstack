const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shipperSchema = new Schema({
  companyName: { type: String, required: true },  
  phone: { type: String, required: true },  
  
}, { toJSON: { virtuals: true } });


/** Relaciones One-To-Many */
shipperSchema.virtual('orders', {
  ref: 'Order',
  localField: '_id',
  foreignField: 'idShipper'
});

module.exports = mongoose.model('Shipper', shipperSchema);
