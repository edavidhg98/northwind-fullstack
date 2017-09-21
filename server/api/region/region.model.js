const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const regionSchema = new Schema({
  regionDescription: { type: String, required: true },  
  
}, { toJSON: { virtuals: true } });


/** Relaciones One-To-Many */
regionSchema.virtual('territorys', {
  ref: 'Territory',
  localField: '_id',
  foreignField: 'idRegion'
});

module.exports = mongoose.model('Region', regionSchema);
