const Class = require('../models/class')

function Create(req,res) {
    var first_class_id=1000
    Class.find().sort({id:-1}).limit(1)
      .then(fetch_class => {
        if (fetch_class.length>0) {
          last_class_id = fetch_class[0].id
          last_class_id = parseInt(last_class_id,16)
          new_class_id = last_class_id+1
          ClassData = {
            title : req.body.title,
            id: new_class_id.toString(16),
            info : req.body.info,
            created_by : req.user._id
          }
          Class.create(ClassData)
              .then(created_class=>{
                  res.json(created_class.id)
              })
              .catch(err => {
                  return res.status(422).json({error:err})
              })
        }
        else{
          ClassData = {
            title : req.body.title,
            id: first_class_id.toString(16),
            info : req.body.info,
            created_by : req.user._id
          }
          Class.create(ClassData)
              .then(created_class=>{
                res.json(created_class.id)
              })
              .catch(err => {
                  return res.status(422).json({error:err})
              })          
        }
      })
      .catch(err => {
        return res.status(422).json({error:err})
      })
}

module.exports = Create