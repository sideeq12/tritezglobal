import {Mission_style} from "./mission_style"
import { useEffect } from "react"
import { gsap, Power4 } from "gsap"

export const Mission = () =>{
    useEffect(()=>{
        let tl = gsap.timeline({
            scrollTrigger: {
              trigger: "p",
              start: "60%",
              end: "80%",
              scrub: 1
            }
          });
        tl.to("h2, p", { "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", 
         opacity : 1,
         y : 0,
         duration : 0.5})
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