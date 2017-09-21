const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  lastName: { type: String, required: true },  
  firstName: { type: String, required: true },  
  title: { type: String, required: true },  
  titleOfCourtesy: { type: String, required: true },  
  birthDate: { type: Date },  
  hireDate: { type: Date },  
  address: { type: String, required: true },  
  city: { type: String, required: true },  
  region: { type: String, required: true },  
  postalCode: { type: String, required: true },  
  country: { type: String, required: true },  
  homePhone: { type: String, required: true },  
  extension: { type: String, required: true },  
  notes: { type: String, required: true },  
  photoPath: { type: String, required: true },  
  idEmployee: { type: Schema.Types.ObjectId }
}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
employeeSchema.virtual('employee', {
  ref: 'Employee',
  localField: 'idEmployee',
  foreignField: '_id',
  justOne: true
});

/** Relaciones One-To-Many */
employeeSchema.virtual('employees', {
  ref: 'Employee',
  localField: '_id',
  foreignField: 'idEmployee'
});
employeeSchema.virtual('orders', {
  ref: 'Order',
  localField: '_id',
  foreignField: 'idEmployee'
});
employeeSchema.virtual('territorys', {
  ref: 'Territory',
  localField: '_id',
  foreignField: 'idEmployee'
});

module.exports = mongoose.model('Employee', employeeSchema);
