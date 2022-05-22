import { Ganimate, Welc } from "./welcome_style"
import Link from "next/link"
import { gsap , Power4, CSSPlugin} from "gsap"
import { useEffect } from "react"

export const Welcome = () =>{
    let t1 = gsap.timeline({delay : 0.3})

    useEffect(()=>{
        let tl = gsap.timeline({ default : { ease : Power4.easeInOut, duration : 2}});
        // let flagPoles = gsap.cCSSPlugin.getRule(".welcome")
        tl.to(".mode, .cust", {  
            opacity : 1,
            y : 0,
            x : 0,
            duration : 0.5, scale : 1})

        tl.to("h2, p, .left a, .lab", { "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", 
         opacity : 1,
         y : 0,
         duration : 0.5})
         tl.to(".welcome", {  
         opacity : 1,
         y : 0,
         duration : 0.5, delay : 0.1, scale : 1})
    }, [])
    return(
      <Ganimate>
            <Welc>
            <div className="left">
            <label htmlFor="tritez label" className="lab">Trendy Collection</label>
            <h2>
                Fashion that reflects what your identity are!
            </h2>
            <p>Anyone can beat you but no one can beat your outfit as you wear tritez.</p>
            <Link  className="stat" href="/products_list">Get started</Link>
            </div>
            <div className="right">
                <img src="shop.png" className="welcome" alt="Tritez welcome page" />
                <div className="mode">
                <img src="mode.png" alt="tritez marketplace tritez global" />
                </div>
                <div className="cust">
                <img src="customers.png" alt="tritez marketplace tritez global" />
                </div>
                 <img className="mark" src="mark.png" alt="tritez marketplace tritez global" />
                 <div className="circle circle1"></div>
                 <div className="circle circle2"></div>
                 <div className="circle circle3"></div>
            </div>
        </Welc>
      </Ganimate>
    )
}