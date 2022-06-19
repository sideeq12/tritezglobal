import { NextApiRequest, NextApiResponse } from "next";
import User from "../database/UserSchema"
import main from "../database/connection"
import bcrypt from "bcryptjs"
import { signToken } from "./utils/auth";


export default function getUsers(req : NextApiRequest, res : NextApiResponse){
    
    let params = req.body;
    main().catch(error => console.log(error));
    const user = User.findOne({ email : params.userEmail}, (err : Error, result : any )=>{
       if(!err && result){
        if(bcrypt.compareSync(params.userPassword, result.password)){
            const token = signToken(result);
            const varai = process.env.JWT_SECRET
            res.status(200).json({
                token,
                message : "success",_id : result._id, 
                fullname : result.full_name,
                datakey : varai
            })
        }else{
            res.status(200).json({message : "incorrect password"})
        }
       }else if(!err && result== null){
        res.status(200).json({
            message : "No email Found"
        })
       }else if(err){
        res.status(200).json({
            message : "error found"
        })
       }
    });
    // create.save().then(()=> {
    //     res.status(200).json(create)
    // })
}