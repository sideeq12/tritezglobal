import { Cart_list } from "../components/cartlist/cartlist";
import { My_link, Last } from "../styles/user_p";
import Link from "next/link";

const User_cart = ()=>{
    return(
        <>
        <My_link>
    <Link href="/">Home </Link>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg><Link href="/products_list">Shopping </Link>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
<Link href="#" className="mai">Shopping Cart</Link>  
</My_link>
        <Cart_list />
        <Last>
        <div className="proceed" style={{"margin" : "50px auto",  "width" : "80vw", "display" : "flex", 
        "justifyContent" : "space-between"}}>
            <div className="pros">
            <Link href="/products_list">back to shopping</Link>
            </div>
            <div className="pro">
            <Link  href="/user_payment">Proceed to checkout</Link>
            </div>
        </div>
        </Last>
        </>
    )
}

export default User_cart;