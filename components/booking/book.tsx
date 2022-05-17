import {  Message,  Form, Data, Button, Book } from "./book_style"

    

export const Booking = ()=>{

    return(
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
    )
}