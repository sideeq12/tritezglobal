
import {Delivery_card} from "./deli_style"
import { useEffect } from "react"

import {useState} from "react"

interface Props {
    image : string,
    title : string,
    message : string,
    check : boolean
}

export  const Delivery = ({image, title, message , check} : Props)=>{
    const [show, setShow ] = useState(false)
   
    return(
        <Delivery_card onClick={()=> {
            check ? setShow(true) : "null"
        }}>
            <img src={image} alt="tritez delivery service nation wide" />
            <label>{title}</label>
            <p>{message}</p>
        </Delivery_card>
    )
}