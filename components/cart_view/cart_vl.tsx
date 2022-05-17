import { Cart_view } from "./cart_view"
import { View_list } from "./cart_views"
import { database } from "../card/database"

const prodcts = database.slice(0, 3)

export const Cartvl = ()=>{
    return(
        <View_list>
        {prodcts.map((pro)=> <Cart_view name={pro.name} 
        image_link={pro.image_link}
        price={pro.price}
        />)}
        </View_list>
    )
}