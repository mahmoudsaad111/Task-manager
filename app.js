const express=require('express'); 
const app = express(); 
const port=process.env.PORT||3000;
const connectDb=require('./db/connect'); 
const tasks=require('./routes/tasks'); 
require('dotenv').config(); 
const notfound=require('./middleware/not-found'); 
const errorHandler=require('./middleware/error-handler') ;
app.use(express.static('./public'))
app.use(express.json()) ;
app.use('/api/v1/tasks',tasks);
app.use(notfound); 
app.use(errorHandler); 
const start=async()=>{
    try {
        await connectDb(process.env.MONGO_URI);
        app.listen(port,console.log(`listening to port ${port}`)); 

    } catch (error) {
    console.log(error); 
   }
}
start();
 



