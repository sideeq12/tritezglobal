import { NextApiRequest, NextApiResponse } from "next";
import User from "../database/UserSchema"
import main from "../database/connection"

// type Data = {
//     users :any
// }

export default function getUsers(req : NextApiRequest, res : NextApiResponse){
    
    // let params = req.body;
    main().catch(error => console.log(error));
    const create = new User({
        full_name : "WaheedSodiq",
        password : "sideeqtest",
        imageUrl : "imageUrl",
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

//     res.status(200).json({ users : "params", 
//     result : params
// })
}