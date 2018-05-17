const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Blackboard = new Schema({
  title: {type: String, required: true},
  description: String,
  owner: {type: Schema.Types.ObjectId, ref: 'User'},
  sharedWith: [{type: Schema.Types.ObjectId, ref: 'User'}],
  deletedAt: { type: Date, default: null },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blackboard', Blackboard);