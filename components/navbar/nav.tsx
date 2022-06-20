import {Err, List, Lists, Logo, Nav, Sign_up, Label,Backg, Message, Google_sign, Newline, Form, Data, Button } from "./nav_style"
import React, { useState, useRef, useEffect, useTransition } from "react"
// import { User } from "./UserClass"
import { Right } from "./right_nav/right"
import { Right_nav } from "./right_nav/right_nav"
import Link from "next/link"
import axios from "axios"
import cookie from "js-cookie"

export const Navbar = ()=>{

    const [show, setShow] = useState(false)
    const [close, setClose] = useState(true)
    const [active, setActive] = useState(true)
    const [showSign, setShowSign ] = useState(false)
    const [showUser, setShowUser ] = useState(false)
    const [user, setUser ] = useState({ userfullname : "", userEmail : "" , userPassword : ""})
    const [errorMessage, setErrorMessage ] = useState("Email not valid!")

    const theCookies = cookie.get("MyUser");
    let Value : any;
    let User : any ;
    if(theCookies){
        User = JSON.parse(theCookies);
        console.log("the cookies success", User)
        Value = <span>{User.full_name}</span>
    }else{
        console.log("the cookies is not working")
        Value = <div  className="search" onClick={()=> setShowSign(true)}>
        <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg>
        </div>
    }
    

    const getUserData = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const userdetails = event.target.value;
    const typeData = event.target.name;
    if(typeData === "fullname"){
        if(userdetails.length < 6){
            setErrorMessage("Enter Valid full name")
        }
        setUser({...user, userfullname : userdetails})
    }else if(typeData === "email"){
        setUser({...user, userEmail : userdetails})
    }else if(typeData === "password"){
        setUser({...user, userPassword : userdetails})
    }
    }
    const URL : string = active ? "/api/CreateUser" : "/api/login"

    const sendUser = async ()=>{
            const res = await axios.post(URL, user)
            const response = res.data;
            cookie.set("MyUser", JSON.stringify(response), { expires : 1/24})
    }
    
   
    return(
        <>
       <Backg className="back" showsign={showSign}>
       <div className="closesign" onClick={()=> setShowSign(false)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#34ADDC" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>
      </div>
       <Sign_up active={active} >
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
                    <img src="/google.png" alt="tritez google sign in icon" />
                    Sign in via google
             </Google_sign>
             <Newline>
                 <hr />
                 <div className="or">Or</div>
             </Newline>
            <Form>
                <Err>{errorMessage}</Err>
                <Data className="sign">
                <label htmlFor="Full name"> Full name *</label> <br />
                <input type="text" name="fullname" onChange={getUserData} required/>
                </Data>
                <Data>
                <label htmlFor="Full name"> Email *</label> <br />
                <input type="email" name="email" onChange={getUserData} required/> <br />
                <small>We will never share your email with anyone else</small>
                </Data>
                <Data>
                <label htmlFor="Password"> Password*</label> <br />
                <input type="password" name="password" onChange={getUserData}  placeholder="******"  required/>
                </Data>
                <Button onClick={sendUser}>
                    {active ? (<>Create an account</>) : (<>Sign in</>)}
                </Button>
            </Form>
            {active ?  <></> : <Link href="/" className="forget"><span style={{"border": "none", "marginLeft" : "auto", "marginRight": "60px"}}>Forgot Password ?</span></Link>}
        </Sign_up>
       </Backg>
        <Nav> 
            
            <div className="burger" onClick={()=> setClose(!close)}>
            { !close ? <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
  <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>}
            </div>
            <Link href="/"><Logo src={"/"+"tritezlogo.png"} alt="tritez maeketplace logo" /></Link>
            
            <List show={show} close={close}>
            <Lists>
                <Link href="/">Home</Link>
            </Lists>
            <Lists  
                 onMouseEnter={() => setShow(true)}
                 onMouseLeave={() => setShow(false)}>
                <span>
                <label htmlFor="/Clothes">Clothes</label>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg> </span>    
    <ul>
                    <li><Link href="/categories/Tops">Tops</Link></li>
                    <li><Link href="/categories/Shirt">Shirts</Link></li>
                    <li><Link href="/categories/Trousers">Trousers</Link></li>
                    <li><Link href="/categories/Cultural wears">Cultural wears</Link></li>
                    <li><Link href="/categories/corporate_wears">Corporate wears</Link></li>
                </ul>
            </Lists>
            <Lists>
                <Link href="/accessories">Accessories</Link>
            </Lists>
            <Lists>
                <Link href="/contact">Contact us.</Link>
            </Lists>
            </List>
            
            <Right>
               <div className="search">
               <Link href="/searchpage">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg> 
                </Link>
               </div>
               {Value}
               <div  className="cart">
               <Link href="/user_cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
                </Link>
               </div>
                
        </Right>
        </Nav>
        </>
    )
}