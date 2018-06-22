var mongoose = require('mongoose');
var Task = mongoose.model('task')

module.exports = {
    show : function(req, res) {
        Task.find({}, function(err, task){
          if(err){
            console.log("Returned error", err);
            res.json({message: "Error", error: err})
          } else {
            res.json({message: "Success", data: task});
          }
        })
      },
    
    add : function(req, res){
        var newTask = new Task(req.body);
        newTask.save(function(err){
          if(err){
            console.log("Returned error", err);
            res.json({message: "Error", error: err})
          } else {
            res.json({message: "Success"});
          }
        })
      },

    delete : function(req, res){
        Task.remove({_id: req.params.id}, function(err){
          if(err){
            console.log("Returned error", err);
            res.json({message: "Error", error: err})
          } else {
            res.json({message: "Removed"});
          }
        })
      },

    info : function(req, res){
      console.log(req.params.id)
        Task.find({_id: req.params.id}, function(err, task){
          if(err){
            console.log("Returned error", err);
            res.json({message: "Error", error: err})
          } else {
            res.json({message: "Success", data: task});
          }
        })
      },

    update : function(req, res) {
      console.log(req.body)
        Task.findByIdAndUpdate({_id: req.body._id}, {$set: req.body}, function(err, task){
          if(err){
            console.log('something went wrong');
            res.json({message: "Error", error: err})
          } else {
            res.json({message: "Updated", data: task});
          }
        })
      }
}