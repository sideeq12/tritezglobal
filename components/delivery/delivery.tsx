
import {Delivery_card} from "./deli_style"
import { useEffect } from "react"
import { gsap, Power3, Power4 } from "gsap"

import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import {useState} from "react"

interface Props {
    image : string,
    title : string,
    message : string,
    check : boolean
}



export  const Delivery = ({image, title, message , check} : Props)=>{
    const [show, setShow ] = useState(false)
    gsap.registerPlugin(ScrollTrigger, Power3)
    useEffect(()=>{
        let tl = gsap.timeline({ default : { ease : Power4.easeInOut, duration : 2}});
    gsap.to(".mycard", {
            scrollTrigger :{
                trigger : ".mycard",
                start : "top center",
                toggleActions : "play none none none",  
            },
         "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", 
    opacity : 1,
    y : 0,
    duration : 0.5, delay : 0.1})
    }, [])
   
    return(
        <Delivery_card className="mycard" onClick={()=> {
            check ? setShow(true) : "null"
        }}>
            <img src={image} alt="tritez delivery service nation wide" />
            <label>{title}</label>
            <p>{message}</p>
        </Delivery_card>
    )
}