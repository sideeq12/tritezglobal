import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    users :string
}

export default function getUsers(req : NextApiRequest, res : NextApiResponse<Data>){
    res.status(200).json({ users : "hello test"})
}