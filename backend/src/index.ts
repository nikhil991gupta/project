import express , {Request,Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import userRoutes from "./routes/users";


mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);
 const app=express();
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 app.use(cors())

//end point api to return json
//  app.get("/api/test",async(req: Request,res: Response)=> {
//     res.json({message:"helloo   from  exp"});

//  });
app.use("/api/users",userRoutes);


 app.listen(7080,()=>{
    console.log("runnung");
 }) 