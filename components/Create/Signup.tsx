import { Sign_up, Label, Message, Google_sign, Newline, Form, Data, Button } from "./signup_style"
import { useState } from "react"

    

export const Signup = ()=>{
    const [active, setActive] = useState(false)

    return(
        <Sign_up active={active}>
            <div className="cover">
            <div className="circle">             
            </div>
            <img src="tritezlogo.png" className="logo" alt="tritez logo" />
            </div>
            <span>
                <Label className="signup"  onClick={()=>{setActive(true)}}>
                    Sign up
                </Label>
                <Label className="signin" onClick={()=>{setActive(false)}}>
                    Sign in
                </Label>
            </span>
            <Message>
                Use your email or continue with your social to create an account 
            </Message>
             <Google_sign>
                    <img src="google.png" alt="tritez google sign in icon" />
                    Sign in via google
             </Google_sign>
             <Newline>
                 <hr />
                 <div className="or">Or</div>
             </Newline>
            <Form>
                <Data className="sign">
                <label htmlFor="Full name"> Full name *</label> <br />
                <input type="text"  required/>
                </Data>
                <Data>
                <label htmlFor="Full name"> Email *</label> <br />
                <input type="email"  required/> <br />
                <small>We will never share your email with anyone else</small>
                </Data>
                <Data>
                <label htmlFor="Password"> Password*</label> <br />
                <input type="password" placeholder="******"  required/>
                </Data>
                <Button>
                    {active ? (<>Create an account</>) : (<>Sign in</>)}
                </Button>
            </Form>
            {active ?  <></> : <a href="" className="forget">Forgot Password ?</a>}
        </Sign_up>
    )
}