import { NextApiRequest, NextApiResponse } from "next";
import User from "../database/UserSchema"
import main from "../database/connection"

// type Data = {
//     users :any
// }

export default function getUsers(req : NextApiRequest, res : NextApiResponse){
    
    let params = req.body;
    main().catch(error => console.log(error));
    const create = new User({
        full_name : params.userfullname,
        password : params.userPassword,
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
        res.status(200).json(create)
    })
//     console.log("the env file is", process.env.MONGODB_URI)
//     res.status(200).json({ users : "params", 
//     result : params
// })
}