const Task=require('../models/task'); 

const asyncfun=require('../middleware/async'); 

const getALLTasks=asyncfun(async(req,res)=>{
    const tasks=await Task.find({});
    res.status(200).json({tasks}); 
} )
const createTask=asyncfun(async(req,res)=>{
    const task=await Task.create(req.body); 
     res.status(200).json({task}); 
   

})

const getTask=asyncfun(async(req,res)=>{
  
        const task=await Task.findOne({_id:req.params.id});
        if(!task){
            return res.status(404).json({msg:`No task with this id :${req.params.id}`}); 
        }
        res.status(200).json({id:task.id,task}); 
  
  
})

const updateTask=asyncfun(async(req,res)=>{
        const task=await Task.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true});
           if(!task){
               return res.status(404).json({msg:`No task with this id :${req.params.id}`}); 
           }
           res.status(200).json({task}); 
   
})

const deleteTask=asyncfun(async (req,res)=>{

     const task=await Task.findOneAndDelete({_id:req.params.id});
        if(!task){
            return res.status(404).json("NOT FOUND"); 
        }
        res.status(200).json({task}); 
  
})




module.exports={getALLTasks,createTask,getTask,updateTask,deleteTask};