
import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
    full_name : String,
    password : String,
    imageUrl : String,
    myOrders : [{
        id : Number,
        address : String,
        order : [{
            id : Number,
            name : String,
            price : Number
        }]
    }]

})

const User = mongoose.model("Users") || mongoose.model("Users", Userschema);

export default User;