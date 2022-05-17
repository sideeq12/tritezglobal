import { Cart_list } from "../components/cartlist/cartlist";
import { My_link } from "./user_p";

const User_cart = ()=>{
    return(
        <>
        <My_link>
    <a href="/">Home </a>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg><a href="/products_list">Shopping </a>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
<a href="#" className="mai">Shopping Cart</a>  
</My_link>
        <Cart_list />
        <div className="proceed" style={{"margin" : "50px auto",  "width" : "80vw", "display" : "flex", 
        "justifyContent" : "space-between", }}>
            <a href="/products_list" style={{"padding" : "10px 30px", "border" : "1px solid black","fontSize" : "12px",
            "borderRadius" : "5px"
        }}>back to shopping</a>
            <a href="/user_payment" className="pro" style={{"padding" : "10px 30px", "fontSize" : "12px", "borderRadius" : "5px", "color" : "white",
             "backgroundColor" : "#34ADDC"}}>Proceed to checkout</a>
        </div>
        </>
    )
}

export default User_cart;