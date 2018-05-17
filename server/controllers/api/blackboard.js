const mongoose = require('mongoose');
const Blackboard = require('../../models/blackboard') 

module.exports = {
  async getBlackboards(req, res){
    const blackboards = await Blackboard.find({ "deletedAt": null });
    res.json(blackboards);
  },
  async getBlackboardById(req, res){
    const blackboard = await Blackboard.findById(req.params.id);
    res.json(blackboard);
  },
  async addBlackboard(req, res){
    const blackboard = new Blackboard({...req.body, owner: req.user._id});
    try {
      await blackboard.save();
      res.status(201).json(blackboard);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  updateBlackboard(req, res){
    
  },
  deleteBlackboard(req, res){
    
  },
  async getMyBlackboards(req, res){
    const blackboards = await Blackboard.find({'deletedAt': null, $or: [{'owner': mongoose.Types.ObjectId(req.user._id)}, {'sharedWith': mongoose.Types.ObjectId(req.user._id)}]});
    res.json(blackboards);
  },
}