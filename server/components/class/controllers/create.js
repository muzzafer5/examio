const Class = require('../models/class')

function Create(req,res) {
    id=1000
    Class.find().sort({id:-1}).limit(1)
      .then(fetch_class => {
        if (fetch_class) {
          id=fetch_class.id+1
        } 
      })
      .catch(err => {
        return res.status(422).json({error:err})
      })
    ClassData = {
        title : req.body.title,
        id: id,
        info : req.body.info,
        created_by : req.user._id
    }
    Class.create(ClassData)
        .then(created_class=>{
            res.send("class created")
        })
        .catch(err => {
            return res.status(422).json({error:err})
        })
}

module.exports = Create