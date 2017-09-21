const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const territorySchema = new Schema({
  territoryDescription: { type: String, required: true },  
  idRegion: { type: Schema.Types.ObjectId }
}, { toJSON: { virtuals: true } });

/** Relaciones Many-To-One */
territorySchema.virtual('region', {
  ref: 'Region',
  localField: 'idRegion',
  foreignField: '_id',
  justOne: true
});

/** Relaciones One-To-Many */
territorySchema.virtual('employees', {
  ref: 'Employee',
  localField: '_id',
  foreignField: 'idTerritory'
});

module.exports = mongoose.model('Territory', territorySchema);
