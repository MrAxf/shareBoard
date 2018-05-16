const Blackboard = require('../../models/blackboard') 

module.exports = {
  async getBlackboards(req, res){
    const blackboards = await Blackboard.where('deleted').ne(null);
    res.json(blackboards);
  },
  async getBlackboardById(req, res){
    const blackboard = await Blackboard.findById(req.params.id);
    res.json(blackboard);
  },
  addBlackboard(req, res){
    
  },
  updateBlackboard(req, res){
    
  },
  deleteBlackboard(req, res){
    
  }
}