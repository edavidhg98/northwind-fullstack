const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierSchema = new Schema({
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
  homePage: { type: String, required: true },  
  
}, { toJSON: { virtuals: true } });


/** Relaciones One-To-Many */
supplierSchema.virtual('products', {
  ref: 'Product',
  localField: '_id',
  foreignField: 'idSupplier'
});

module.exports = mongoose.model('Supplier', supplierSchema);
