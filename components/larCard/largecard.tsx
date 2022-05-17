import { Larger } from "./large"

interface datas {
    image1 : string,
    image2 : string ,
    name1 : any
}

export const LargeCard = ({image1 , image2, name1 } : datas)=>{
    let first = "/jewel.jpg"
    let second = "/cool_hair.jpg"
    return(
        <Larger first={image1} second={image2}>
            <div className="left">
            </div>
            <div className="right">
            </div>
            <div className="covers"></div>
            <h5>{name1}</h5>
        </Larger>
    )
}