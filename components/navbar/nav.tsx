import { List, Lists, Logo, Nav, Sign_up, Label,Backg, Message, Google_sign, Newline, Form, Data, Button } from "./nav_style"
import { useState } from "react"
import { Right } from "./right_nav/right"
import { Right_nav } from "./right_nav/right_nav"


export const Navbar = ()=>{

    const [show, setShow] = useState(false)
    const [close, setClose] = useState(false)
    const [active, setActive] = useState(true)
    const [showSign, setShowSign ] = useState(false)
    const [showUser, setShowUser ] = useState(false)
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
       </Backg>
        <Nav> 
            
            <div className="burger" onClick={()=> setClose(!close)}>
            { !close ? <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
  <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>}
            </div>
            <a href="/"><Logo src={"/"+"tritezlogo.png"} alt="tritez maeketplace logo" /></a>
            
            <List show={show} close={close}>
            <Lists>
                <a href="/">Home</a>
            </Lists>
            <Lists  
                 onMouseEnter={() => setShow(true)}
                 onMouseLeave={() => setShow(false)}>
                <span>
                <label htmlFor="/Clothes">Clothes</label>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg> </span>        <ul>
                    <li><a href="/categoeries/Tops">Tops</a></li>
                    <li><a href="/categories/Shirt">Shirts</a></li>
                    <li><a href="/categories/Trousers">Trousers</a></li>
                    <li><a href="/categories/Cultural wears">Cultural wears</a></li>
                    <li><a href="/categories/corporate_wears">Corporate wears</a></li>
                </ul>
            </Lists>
            <Lists>
                <a href="/accessories">Accessories</a>
            </Lists>
            <Lists>
                <a href="/contact">Contact us.</a>
            </Lists>
            </List>
            
            <Right>
                <a href="/searchpage" className="search">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg> 
                </a>
                <a onClick={()=> setShowSign(true)}  className="search">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg>
                </a>
                <a href="/user_cart" className="cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
                </a>
                
        </Right>
        </Nav>
        </>
    )
}