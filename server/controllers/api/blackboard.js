const mongoose = require('mongoose');
const Blackboard = require('../../models/blackboard')
const User = require('../../models/user')

module.exports = {
  async getBlackboards(req, res) {
    const blackboards = await Blackboard.find({ "deletedAt": null });
    res.json(blackboards);
  },
  async getBlackboardById(req, res) {
    const blackboard = await Blackboard.findById(req.params.id);
    blackboard.sharedWith = await User.find({ '_id': { $in: blackboard.sharedWith } })
    res.json(blackboard);
  },
  async addBlackboard(req, res) {
    const blackboard = new Blackboard({ ...req.body, owner: req.user._id });
    try {
      await blackboard.save();
      res.status(201).json(blackboard);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  async updateBlackboard(req, res) {
    const blackboard = await Blackboard.findById(req.params.id);
    if (!blackboard.owner.equals(req.user._id)) {
      res.status(404).json({ message: "Blackboard not found" });
    } else {
      blackboard.set({ ...req.body, updatedAt: Date.now() });
      try {
        await blackboard.save();
        res.json(blackboard);
      } catch (err) {
        res.status(400).json(err);
      }
    }

  },
  async deleteBlackboard(req, res) {
    const blackboard = await Blackboard.findById(req.params.id);
    if (!blackboard.owner.equals(req.user._id)) {
      res.status(404).json({ message: "Blackboard not found" });
    } else {
      blackboard.set({ deletedAt: Date.now() });
      try {
        await blackboard.save();
        res.json(blackboard);
      } catch (err) {
        console.log(err)
        res.status(400).json(err);
      }
    }
  },
  async getMyBlackboards(req, res) {
    const blackboards = await Blackboard.find({ 'deletedAt': null, $or: [{ 'owner': mongoose.Types.ObjectId(req.user._id) }, { 'sharedWith': mongoose.Types.ObjectId(req.user._id) }] });
    res.json(blackboards);
  },
}