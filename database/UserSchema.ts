
import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
    full_name : String,
    password : String,
    imageUrl : String,
    email  : String,
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
// let User : any;
// if(mongoose.model("Users")){
//     User = mongoose.model("Users")
// }else{
//     User =  mongoose.model("Users", Userschema);
// }
 export const User =  mongoose.model("Users", Userschema);

// export default User;