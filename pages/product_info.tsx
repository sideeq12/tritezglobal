import { Product_Cartes } from "../components/product_detail/product"
import { Rate_section } from "../components/rating/rates";
import { Similar } from "./info";
import { Card_List } from "../components/card/cardstyle";
import {Card } from "../components/card/card"
import Link from "next/link";
import { database } from "../components/card/database";
import { My_link } from "./user_p";

const product = database.slice(0,6)

const Product_page = () =>{
    return(
        <>
           <My_link>
        <Link href="/">Home </Link>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
 <Link href="/products_list">Shopping Cart</Link> 
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
 <Link href="#" className="mai">Product Preview</Link>
    </My_link>
        <Product_Cartes />
        <Rate_section />
        <Similar>
            <h3>You may also like</h3>
            <Card_List>
            {product.map((data)=> <Card 
             name={data.name}
             imageLink={data.image_link}
             rate={data.rate}
             rate_count={data.rate_count}
             price={data.price}
             old_price={data.old_price}
             in_stock={data.instock}
             items_left={data.items_left}
             />)}
        </Card_List>
        </Similar>
        </>
    )
}

export default Product_page;