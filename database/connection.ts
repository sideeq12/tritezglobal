// Creating mongoDM connection here

import mongoose from "mongoose";

const main = async ()=>{
    await mongoose.connect(process.env.MONGODB_URI as string)
    console.log("database connected !")
}

export default main;