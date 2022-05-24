import { Delivery } from "./delivery"
import { Delivery_list,Backg,Book, Message, Data, Form,Button } from "./deli_style"
import { useState , useEffect} from "react"
import { gsap , Power3, Power4} from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"


export const Delist = () =>{
    const [showSign, setShowSign] = useState(false)

    gsap.registerPlugin(ScrollTrigger, Power3)
    useEffect(()=>{
       gsap.to(".eachCard", {"clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", 
       y : 0,
       duration : 0.5, delay : 0.1, scale : 1, ease : Power4.easeInOut

       })
    }, [])
    return(<>
  <Backg className="back" showsign={showSign}>
       <div className="closesign" onClick={()=> setShowSign(false)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#34ADDC" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>
      </div>
      <Book>
            <div className="cover">
            <div className="circle">             
            </div>
            <img src="tritezlogo.png" className="logo" alt="tritez logo" />
            </div>
            <h4>Book an appointment</h4>
            <Message>
                Fill in the form below to book an appointment with your stylist.
            </Message>
             
            <Form>
                <Data>
                <label htmlFor="Full name"> Your name *</label> <br />
                <input type="text"  required/>
                </Data>
                <Data>
                <label htmlFor="Full name"> Email address *</label> <br />
                <input type="email"  required/> <br />
                <small>We will never share your email with anyone else</small>
                </Data>
                <Data>
                <label htmlFor="Password"> Phone number *</label> <br />
                <input type="text"  required/>
                </Data>
                <Data>
                <label htmlFor="Password"> How can we help ?</label> <br />
                <textarea placeholder="Hello ..."></textarea>
                </Data>
                <Data>
               <div>
               <label htmlFor="date">Pick date :  </label><input className="date" type="date" />
               </div> </Data>
                <Data>
                <select>
                    <option value="">Show available time</option>
                    <option value="23">Monday : 12</option>
                </select>
                </Data>
                <Button>
                    <a href="#" className="send">
                        Confirm
                    </a>
                    <a href="#" className="cancel">
                        Cancel
                    </a>
                </Button>
            </Form>
        </Book>
       </Backg>
<Delivery_list className=".eachCard">
            <Delivery check={false} image="bus.png" title="Easy Delivery" 
            message="ipsum dolor sit amet consectetur arem unde eum aperiam porro eaque doloribus hic dolor?" />
            <Delivery check={false} image="secure.png" title="Secured Payment"
             message="ipsum dolor sit amet consectetur arem unde eum aperiam porro eaque doloribus hic dolor?" />
            <Delivery check={true} image="chart.png" title="Book an appointment"
             message="ipsum dolor sit amet consectetur arem unde eum aperiam porro eaque doloribus hic dolor?" />
       </Delivery_list>
    </>
    )
}