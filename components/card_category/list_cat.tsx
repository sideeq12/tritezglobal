import { List_category } from "./card.catstyle"
import { Card_cart } from "./card_cat"


export const List_Cart = ()=>{
    return(
        <List_category>
            <Card_cart  name="View All" image="cool_hair.jpg" category="all" />
            <Card_cart  name="Blouses" image="blouse.jpg" category="Blouse" />
            <Card_cart name="Shirt" image="shirt.jpg" category="Shirt" />
            <Card_cart name="Trouser" image="trouser.jpg" category="Trouser" />
            <Card_cart name="Corporate" image="corporate.jpg" category="corporate" />
            <Card_cart name="Cultural Wears" image="culture.jpg" category="cultural" />
        </List_category>
    )
}