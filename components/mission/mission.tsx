import {Mission_style} from "./mission_style"
import { useEffect } from "react"
import { gsap, Power3 } from "gsap"

import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

export const Mission = () =>{
    // gsap.registerPlugin(ScrollTrigger, Power3)
    // useEffect(()=>{
    //     let tl = gsap.timeline({
    //         scrollTrigger : {
    //             trigger : ".mission",
    //             pin : true,
    //             start : "+200%",
    //             end : "90%",
    //             scrub : 1
    //         }
    //     })

    //     tl.to(".mission",
    //     { "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", 
    //    opacity : 1,
    //    y : 0,
    //    duration : 0.5},)
    // }, [])
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