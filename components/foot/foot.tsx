
import { Footer_style } from "./foot_style"

export const Footer = ()=>{
    return (
        <Footer_style>
            <div className="first">
                <div className="details">
                    <img src="/tritezlogo.png" alt="tritez logo market place" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Optio nobis dolore 
                        adipisci dicta ea voluptatem, ad Deleniti?</p>
                </div>
                <ul>
                    <li>Menu</li>
                    <li><a href="#">Clothes</a></li>
                    <li><a href="#">Accesories</a></li>
                    <li><a href="#">About</a></li>
                </ul>
                <ul>
                    <li>Company</li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <ul>
                    <li>Help</li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Delivery Services</a></li>
                    <li><a href="#">Terms and Condition</a></li>
                </ul>
                </div>

            <div className="second">
                <p>Copyright Tritez 2022. All rights reserved.</p>
                <div>
                    <a href="#"><img src="insta.png" alt="" /></a>
                    <a href="#"><img src="facebook.png" alt="" /></a>
                    <a href="#"><img src="twiter.png" alt="" /></a>
                    <a href="#"><img src="linkedIn.png" alt="" /></a>
                </div>
            </div>
        </Footer_style>
    )
}