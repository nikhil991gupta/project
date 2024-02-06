// import express , {Request,Response} from 'express';
// import cors from 'cors';
// import "dotenv/config";
// import mongoose from 'mongoose';
// import userRoutes from "./routes/users";
// import authRoutes from "./routes/auth";


// mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);
//  const app=express();
//  app.use(express.json());
//  app.use(express.urlencoded({extended:true}));
//  app.use(cors());
// //  app.use(cors({ origin: 'http://localhost:5173' }));
//  app.use((req, res, next) => {
//    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
//    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//    res.header('Access-Control-Allow-Credentials', 'true'); // Allow credentials

//    if (req.method === 'OPTIONS') {
//        res.sendStatus(200); // Handle preflight request
//    } else {
//        next();
//    }
// });

// //end point api to return json
// //  app.get("/api/test",async(req: Request,res: Response)=> {
// //     res.json({message:"helloo   from  exp"});

// //  });
// app.use("/api/auth",authRoutes);

// app.use("/api/users",userRoutes);


//  app.listen(7080,()=>{
//     console.log("'ssss");
//  }) 
import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import cookieParser from  "cookie-parser";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);
const app = express();
app.use(cookieParser())
app.use(cors()); // Use cors middleware first
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
// Custom CORS headers middleware
app.use(cors({
   origin: process.env.FRONTEND_URL,
   //methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
   credentials: true,
   // to get rid off cors error
 }));

// Endpoint for testing
// app.get("/api/test", async (req: Request, res: Response) => {
//     res.json({ message: "hello from exp" });
// });

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(7080, () => {
    console.log("Server is running on port 7080");
});
