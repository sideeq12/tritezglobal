import {Mission_style} from "./mission_style"
import { useEffect } from "react"
import { gsap, Power3, Power4 } from "gsap"

import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

export const Mission = () =>{
    gsap.registerPlugin(ScrollTrigger, Power3)
    useEffect(()=>{
        let tl = gsap.timeline({ default : { ease : Power4.easeInOut, duration : 2}});
        gsap.to(".mission", {
                scrollTrigger :{
                    trigger : ".mission",
                    start : "top center",
                    toggleActions : "play none none none",  
                },
             "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", 
        opacity : 1,
        y : 0,
        duration : 0.5, delay : 0.2})
    }, [])
    return (
        <Mission_style className="mission">
            <h2>Our Speciality</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, 
                adipisci error. Perspiciatis provident nulla accusantium officiis a possimus 
                laborum quam mollitia 
                sapiente architecto adipisci qui sed aut quod, quae maiores.</p>
        </Mission_style>
    )
}