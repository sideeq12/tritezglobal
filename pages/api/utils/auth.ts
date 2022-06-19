import jwt from "jsonwebtoken"

const signToken = (user : any) =>{
    return jwt.sign(
        {
            _id : user._id,
            fullname : user.fullname,
            email : user.email
        },
        "iwugeuscd",
        {
            expiresIn :"30d"
        }
    )
}

export {signToken}