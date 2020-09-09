const express = require("express")
const mongoose = require('mongoose')

const {myTodo,joiSchema} = require('./models/todo')

const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://root:toor@cluster0-kkzmc.mongodb.net/broad-infinity-todo",{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true},(e)=>{if(e)throw e})
var dbConnect = mongoose.connection

dbConnect.on("open",()=>{

    app.get("/list",(req,res)=>{
        try {
            myTodo.find().then((data)=>{
                return res.status(200).json(data)
            }).catch((e)=>{
                return res.status(400).json(e)
            })  
        } catch (error) {
            console.log(error)
            return res.status(400).json(error)
        }
    })

    app.post("/add", (req,res)=>{
        try {
            userInput = {task_name,task_description,creator,duration} = req.body

            const { error } = joiSchema(userInput);
            if (error)
              return res.status(400).json({
                success: false,
                message: error.details[0].message
              });

            let todo = new myTodo(userInput)
            userInput.duration = 1000*60*`${userInput.duration}`
            todo.duration = Date.now() + userInput.duration
    
            todo.save().then(()=>{
            return res.status(200).json(todo)
            }).catch(err=>res.json(err))
        } catch (error) {
            console.log(error)
            return res.status(400).json(error)
        }
    })

})

let port = process.env.PORT||8080
app.listen(port,process.env.IP,()=>{
    console.log(`Server up on port ${port}`)
})