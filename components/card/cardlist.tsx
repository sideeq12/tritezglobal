
import { Card } from "./card"
import { Card_List, CHA, Coverchain } from "./cardstyle"
import { database } from "./database"
import Link from "next/link"
import { useState } from "react"

export const CardList = ()=>{
    const product = database.slice(0, 8);

    const[allProduct, setAllProduct ]= useState(true)
    const[clothes, setClothes ]= useState(false)
    const [accessories, setAccessories ]= useState(false)

    const changeAll = ()=>{
        setClothes(false);
        setAccessories(false)
        setAllProduct(true)
    }
    const changeClothes = ()=>{
        setClothes(true);
        setAccessories(false)
        setAllProduct(false)
    }
    const changeAcc= ()=>{
        setClothes(false);
        setAccessories(true)
        setAllProduct(false)
    }
    return(
        <Coverchain>
            <div className="change">
                <div>
                    <h3>New Arrivals</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Nemo esse odio tempora veniam natus inventore culpa cumque. 
                         Ea aspernatur 
                         nisi nesciunt di?</p>
                </div>
                <div className="action">
                        <CHA className="cha" bord={allProduct} onClick={()=>{changeAll()}} >All products</CHA>
                        <CHA className="cha" bord={clothes} onClick={()=>{changeClothes()}} >Clothes</CHA>
                        <CHA className="cha" bord={accessories} onClick={()=>{changeAcc()}} >Accesories</CHA>
                </div>
            </div>
            <Card_List>
            {product.map((data)=> <Card 
            key={Math.floor(Math.random()*3024)}
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
        <div className="next">
            <Link href="/products_list">View All</Link>
        </div>
        </Coverchain>
    )
}