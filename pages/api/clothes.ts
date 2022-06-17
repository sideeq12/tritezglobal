import { NextApiRequest, NextApiResponse } from "next";
import User from "../database/UserSchema"
import main from "../database/connection"

// type Data = {
//     users :any
// }

export default function getUsers(req : NextApiRequest, res : NextApiResponse){
    main().catch(error => console.log(error));
    const create = new User({
        name : "hello test"
    })
    create.save().then(()=> {
        res.status(200).json(create)
    })

    // res.status(200).json({ users : "hello test"})
}