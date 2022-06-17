
import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
    name : String
})

const User = mongoose.model("Users") || mongoose.model("Users", Userschema);

export default User;