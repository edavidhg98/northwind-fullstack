const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName: { type: String, required: true },  
  quantityPerUnit: { type: String, required: true },  
  unitPrice: { type: Number },  
  unitsInStock: { type: Number },  
  unitsOnOrder: { type: Number },  
  reorderLevel: { type: Number },  
  discontinued: { type: Boolean, required: true },  
  idCategory: { type: Schema.Types.ObjectId },idSupplier: { type: Schema.Types.ObjectId }
}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
productSchema.virtual('category', {
  ref: 'Category',
  localField: 'idCategory',
  foreignField: '_id',
  justOne: true
});
productSchema.virtual('supplier', {
  ref: 'Supplier',
  localField: 'idSupplier',
  foreignField: '_id',
  justOne: true
});

/** Relaciones One-To-Many */
productSchema.virtual('orderDetails', {
  ref: 'Order Detail',
  localField: '_id',
  foreignField: 'idProduct'
});

module.exports = mongoose.model('Product', productSchema);
