import {  CartL } from "./cart_style"
import { Cart } from "./cart"
import { database } from "../card/database"

const product = database.slice(0, 6)

export const Cart_list = ()=>{
    return(
        <CartL>
            {product.map(result => <Cart  name={result.name}
            key={Math.floor(Math.random()*23023)}
             imagelink={"/"+result.image_link}
             price={result.price}/>)}
        </CartL>
    )
}