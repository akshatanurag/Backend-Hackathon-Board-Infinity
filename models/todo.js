const mongoose=require("mongoose")
const joi = require('joi')

const todoSchema =new mongoose.Schema({
task_name:{
    type:String,
    required:true
},
task_description :{
    type:String,
    required:true
},
creator:{
    type:String,
    required:true
},
duration: {
    type: Date
},
created_at :{
    type: Date,
    default: Date.now
}

})
todoSchema.index({"duration":1},{expireAfterSeconds:0})
const myTodo=mongoose.model('todo-data',todoSchema)

const joiSchema = (todo)=>{
    const schema = joi.object().keys({
        task_name: joi.string().required().min(1).max(100),
        task_description: joi.string().min(3).max(500).required(),
        creator: joi.string().min(2).max(50).required(),
        duration: joi.number().required()
      })
      return schema.validate(todo)
}

module.exports = {
    myTodo,
    joiSchema
}