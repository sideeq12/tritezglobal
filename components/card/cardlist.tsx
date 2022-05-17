
import { Card } from "./card"
import { Card_List, Coverchain } from "./cardstyle"
import { database } from "./database"


export const CardList = ()=>{
    const product = database.slice(0, 8)
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
                        <div className="cha" onClick={()=>{}} >All products</div>
                        <div className="cha" onClick={()=>{}}>Clothes</div>
                        <div className="cha" onClick={()=>{}}>Accessories</div>
                </div>
            </div>
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
        <div className="next">
            <a href="/products_list">View All</a>
        </div>
        </Coverchain>
    )
}