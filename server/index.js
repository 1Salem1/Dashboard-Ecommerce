import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'


import clientRoutes from "./routes/client.js"
import generalRoutes from "./routes/general.js"
import managementRoutes from "./routes/management.js"
import salesRoutes from "./routes/sales.js"
/* CONFIGURATION */

dotenv.config();

//create an Express application instance
const app = express();


// enables JSON parsing for incoming requests
app.use(express.json());


// import helmet library and add its middleware to the application for adding security-related HTTP headers
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy : "cross-origin"}));



// import morgan and add its middleware to the application for logging request details in the "common" format
app.use(morgan("common"));



/* ROUTES */ 
app.use("/client" , clientRoutes)
app.use("/general" , generalRoutes)
app.use("/management" , managementRoutes)
app.use("/sales" , salesRoutes)


/* MONGOOSE SETUP */ 
const PORT = process.env.PORT || 9000 ;
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser : true ,
    useUnifiedTopology : true ,
}).then(()=>{
    app.listen(PORT , () => console.log(`Server Port :' ${PORT}`))
}).catch((er)=> console.log(`DB did not connect:' ${er}`))