import {Card_Layout } from "./cardstyle"
import Link from "next/link"

interface details {
    imageLink : string, 
    name : string,
    rate : number,
    rate_count : number,
    old_price : number,
    price : number,
    in_stock : boolean,
    items_left : number
}

export const Card = ({imageLink, name, rate, rate_count, price, old_price, in_stock, items_left} : details)=>{
    return (
        <Card_Layout color={imageLink} stock={in_stock}>
                <div className="image">

                </div>
                <div className="description">
                    <div className="first">
                        <span>
                            {name}
                        </span>
                         <label>
                            <img src="star.png" alt="tritez rate image count" />
                            {rate} ({rate_count})
                         </label>
                    </div>
                    <div className="second">
                        Price : <span>${price}</span><s>${old_price}</s>
                    </div>
                    <div className="last">
                        <div>
                            <label> {in_stock ? <>In stock</> : <>Sold out</>}</label> <br />
                            Only {items_left} items left
                        </div>
                        <Link href="/product_info">Add to cart</Link>
                    </div>
                </div>
        </Card_Layout>
    )
}