import {Mission_style} from "./mission_style"
import { useEffect } from "react"
import { gsap, Power3 } from "gsap"

import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

export const Mission = () =>{
   
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