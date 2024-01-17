

import dotenv from "dotenv";
import express from "express";
import connectDB from './db/index.js'


dotenv.config({
    path:'./env'
})

connectDB()









// (async ()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGOOSE_URI}/{DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("Error:",error);
//        })

//        app.listen(process.env.PORT,()=>{
//         console.log(`app is listening on ${process.env.PORT}`)
//        })
//     }
//     catch(error){
//         console.log("ERROR: ",error)
//         throw error
//     }
// })()