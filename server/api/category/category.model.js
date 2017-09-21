const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  categoryName: { type: String, required: true },  
  description: { type: String, required: true },  
  
}, { toJSON: { virtuals: true } });


/** Relaciones One-To-Many */
categorySchema.virtual('products', {
  ref: 'Product',
  localField: '_id',
  foreignField: 'idCategory'
});

module.exports = mongoose.model('Category', categorySchema);
