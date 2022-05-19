import {My_address } from "../components/address _billing/address"
import { Cartvl } from "../components/cart_view/cart_vl";
import { Pay_cov, My_link } from "./user_p";


const Payment_page = ()=>{
    return(

<>
<My_link>
    <a href="/">Home </a>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
<a href="/products_list">Shopping Cart</a> 
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
<a href="#" className="mai">Checkout</a> 
</My_link>
        <Pay_cov>
            <div className="usercart">
                <h3>Your Orders</h3>
            <Cartvl />
            <div className="calc">
                <span>
                    <label htmlFor="delivery">Delivery :</label>
                    <label htmlFor="delivery" className="bol">{"$"}20</label>
                </span>
                <span>
                    <label htmlFor="delivery">Discount :</label>
                    <label htmlFor="delivery" className="bol">0</label>
                </span>
                <span className="total">
                    <label htmlFor="delivery">Total</label>
                    <label htmlFor="delivery" className="bol">{"$"}20</label>
                </span>
            </div>
            </div>
            <My_address />
        </Pay_cov></>
    )
}


export default Payment_page;