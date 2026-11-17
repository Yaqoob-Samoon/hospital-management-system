import mongoose from "mongoose";


export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName: "HMS_1"
    }).then(()=>{
        console.log("connected to database");
        
    }).catch(err=>{
        console.log(`some error occured while connecting: ${err}`);

    });
};