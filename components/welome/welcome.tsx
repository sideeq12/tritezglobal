import { Welc } from "./welcome_style"
import Link from "next/link"

export const Welcome = () =>{
    return(
        <Welc>
            <div className="left">
            <label htmlFor="tritez label">Trendy Collection</label>
            <h2>
                Fashion that reflects what your identity are!
            </h2>
            <p>Anyone can beat you but no one can beat your outfit as you wear tritez.</p>
            <Link href="/products_list">Get started</Link>
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
    )
}