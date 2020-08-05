const Class = require('../../class/models/class')

function FetchClass(req,res) {
  Class.find({created_by:req.user.id})
  .then(classes=>{ 
      res.json(classes)
  })
  .catch(err =>{
      res.status.json({Err : err})
  })
}

module.exports = FetchClass 