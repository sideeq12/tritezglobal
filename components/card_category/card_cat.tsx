import { Cart_cat, Img_bg } from "./card.catstyle"


interface Props {
    name : string,
    image : string,
    category : string
}

export const Card_cart = ({name : name , image : image, category} : Props)=>{
    return(
        <Cart_cat>
            <div className="cover">
                <Img_bg show_image={image} className="img"></Img_bg> <div className="them"></div> </div>

            <a href={"/categories/"+category}>{name}</a>
        </Cart_cat>
    )
}