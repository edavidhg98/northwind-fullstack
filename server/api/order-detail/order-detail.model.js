const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderDetailSchema = new Schema({
  unitPrice: { type: Number, required: true },  
  quantity: { type: Number, required: true },  
  discount: { type: Number, required: true },  
  idOrder: { type: Schema.Types.ObjectId },idProduct: { type: Schema.Types.ObjectId }
}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
orderDetailSchema.virtual('order', {
  ref: 'Order',
  localField: 'idOrder',
  foreignField: '_id',
  justOne: true
});
orderDetailSchema.virtual('product', {
  ref: 'Product',
  localField: 'idProduct',
  foreignField: '_id',
  justOne: true
});


module.exports = mongoose.model('OrderDetail', orderDetailSchema);
