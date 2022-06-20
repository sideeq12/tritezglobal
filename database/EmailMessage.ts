
import mongoose from "mongoose";

const Emailschema = new mongoose.Schema({
    title: String,
    Sender: String,
    imageUrl : String,

})

const Emailmessage =  mongoose.model("Emails", Emailschema);

export default Emailmessage;