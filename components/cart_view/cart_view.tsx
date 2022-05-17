
import {Cart_v } from "./cart_views"

interface pro_d{
    image_link : string,
    name : string,
    price : number,
}


export const  Cart_view = ({price, image_link, name} : pro_d)=>{
    return(
        <Cart_v imgl={image_link}>
            <div className="imagelayout"></div>
            <div className="details">
                <b>{name}</b>
                <p>size : <label htmlFor="XS">XS</label> 
                color : <label htmlFor="orange">Orange</label></p>
                <div>{"$"+price} <label htmlFor="x">x 01</label></div>
            </div>
        </Cart_v>
    )
}