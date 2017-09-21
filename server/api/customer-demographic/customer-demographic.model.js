const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerDemographicSchema = new Schema({
  customerDesc: { type: String, required: true },  
  
}, { toJSON: { virtuals: true } });


/** Relaciones One-To-Many */
customerDemographicSchema.virtual('customers', {
  ref: 'Customer',
  localField: '_id',
  foreignField: 'idCustomer Demographic'
});

module.exports = mongoose.model('CustomerDemographic', customerDemographicSchema);
