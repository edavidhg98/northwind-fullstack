const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  orderDate: { type: Date },  
  requiredDate: { type: Date },  
  shippedDate: { type: Date },  
  freight: { type: Number },  
  shipName: { type: String, required: true },  
  shipAddress: { type: String, required: true },  
  shipCity: { type: String, required: true },  
  shipRegion: { type: String, required: true },  
  shipPostalCode: { type: String, required: true },  
  shipCountry: { type: String, required: true },  
  idCustomer: { type: Schema.Types.ObjectId },idEmployee: { type: Schema.Types.ObjectId },idShipper: { type: Schema.Types.ObjectId }
}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
orderSchema.virtual('customer', {
  ref: 'Customer',
  localField: 'idCustomer',
  foreignField: '_id',
  justOne: true
});
orderSchema.virtual('employee', {
  ref: 'Employee',
  localField: 'idEmployee',
  foreignField: '_id',
  justOne: true
});
orderSchema.virtual('shipper', {
  ref: 'Shipper',
  localField: 'idShipper',
  foreignField: '_id',
  justOne: true
});

/** Relaciones One-To-Many */
orderSchema.virtual('orderDetails', {
  ref: 'Order Detail',
  localField: '_id',
  foreignField: 'idOrder'
});

module.exports = mongoose.model('Order', orderSchema);
