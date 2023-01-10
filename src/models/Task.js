const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
  name: {
    required: true,
    type: String
  },
  description: String
}, {
  timestamps: true
});

module.exports = model('Task', taskSchema);
;