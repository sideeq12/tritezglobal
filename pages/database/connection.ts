// Creating mongoDM connection here

import mongoose from "mongoose";

const main = async ()=>{
    await mongoose.connect("mongodb+srv://TritezAdmin:TritezAdmin@tritezcluster.uqtqk.mongodb.net/?retryWrites=true&w=majority")
    console.log("database connected !")
}

export default main;