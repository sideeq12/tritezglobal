import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../database/UserSchema"
import main from "../../database/connection"
import bcrypt from "bcryptjs"

// type Data = {
//     users :any
// }

export default function getUsers(req : NextApiRequest, res : NextApiResponse){
    let params = req.body;
    main().catch(error => console.log(error));
    const user = User.findOne({ email : params.userEmail}, (err : Error, result : any )=>{
        if(!err && result){
            res.status(200).json({ message : "used"})
        }else if(!err &&!result){
            const create = new User({
                full_name : params.userfullname,
                password : bcrypt.hashSync(params.userPassword),
                imageUrl : "imageUrl",
                email : params.userEmail,
                myOrders : [{
                    id : 2,
                    address : "oriire area shaki",
                    order : [{
                        id : 3,
                        name : "Latest Clothes",
                        price : 34
                    }]
                }]
            })
            create.save().then(()=> {
                res.status(200).json({ message : "success", data : create})
            })
        }
    })
        
        
}

