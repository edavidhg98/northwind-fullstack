const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  companyName: { type: String, required: true },  
  contactName: { type: String, required: true },  
  contactTitle: { type: String, required: true },  
  address: { type: String, required: true },  
  city: { type: String, required: true },  
  region: { type: String, required: true },  
  postalCode: { type: String, required: true },  
  country: { type: String, required: true },  
  phone: { type: String, required: true },  
  fax: { type: String, required: true },  
  
}, { toJSON: { virtuals: true } });


/** Relaciones One-To-Many */
customerSchema.virtual('orders', {
  ref: 'Order',
  localField: '_id',
  foreignField: 'idCustomer'
});
customerSchema.virtual('customerDemographics', {
  ref: 'Customer Demographic',
  localField: '_id',
  foreignField: 'idCustomer'
});

module.exports = mongoose.model('Customer', customerSchema);
