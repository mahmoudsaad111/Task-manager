module.exports=(fun)=>{
   return async(req,res,next)=>{
    try{
     await fun(req,res,next); 
    }
    catch(err){
        next(err)
    }
   }
}