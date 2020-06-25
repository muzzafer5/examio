const Class = require('../models/class')

function Join(req,res) {
    Class.findOne({id:req.body.id})
        .then(fetch_class=>{
            if(fetch_class){
                enrolled_students=fetch_class.enrolled_students
                enrolled_students.add(req.user._id)
                Class.updateOne({id:req.body.id},{enrolled_students : enrolled_students},function(err){
                    if(err)
                      return res.status(422).json({error:err})
                    else
                      res.send("updated")
                  })
            }
            else{
                return res.status(422).json({error:"Wrong id"})
            }
        })
}

module.exports = Join