const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
  title: String,
  company: String ,
  dateFrom: Date,
  dateTo: Date,
  description: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;