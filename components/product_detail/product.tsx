import { Product_style , Swit, Diva, Imagelist, Images, Uimage, Love} from "./product_style"
import { useState, useEffect} from "react"
import  Link from "next/link"


export const Product_Cartes = ()=>{
    const [info, setInfo ]= useState(true)
    const [feat, setFeat ]= useState(false)
    const [delivery, setDelivery ]= useState(false)
    const [parag, setParag] = useState("")
    const [mainpic, setMainpic] = useState("prod.png")
    const [add, setAdd ] = useState(false)


    // SETTING STATES FOR THE IMAGES

    const[first, setFirst] = useState(true)
    const[second, setSecond] = useState(false)
    const[third, setThird] = useState(false)
    const[fourth, setFourth] = useState(false)

    let de_mess:string = "Fast and Quick delivery as usual";
    let info_mes:string = "From the moment you use a website builder and construct your site’s design, think about how images and descriptions can work in harmony to tell your story to customers.";
    let feat_mess:string = "Whether you’re selling t-shirts or strollers, shoppers like to buy from people they trust and building trust is different based on what you are selling. details"

    const setFi = ()=>{
        setFirst(true);
        setSecond(false);
        setThird(false);
        setFourth(false);
        setMainpic("prod.png")
    }
    const setSe = ()=>{
        setFirst(false);
        setSecond(true);
        setThird(false);
        setFourth(false);
        setMainpic("blouse.jpg");
    }
    const setTh = ()=>{
        setFirst(false);
        setSecond(false);
        setThird(true);
        setFourth(false);
        setMainpic("culture.jpg")
    }
    const setFo = ()=>{
        setFirst(false);
        setSecond(false);
        setThird(false);
        setFourth(true);
        setMainpic("pradeep.jpg");
    }
    useEffect(()=>{
        if(info){
            setParag(info_mes)
        }else if(delivery){
            setParag(de_mess)
        }else{
            setParag(feat_mess)
        }
    }, [info, feat, delivery])
    return(
        <Product_style>
            <Images mainpics={mainpic}>
                <Imagelist>
                    <Uimage bgc="prod.png" show={first} onClick={()=>{setFi()}}> 
                    <div className="over"></div>
                    </Uimage>
                    <Uimage bgc="blouse.jpg" show={second} onClick={()=>{setSe()}}> 
                    <div className="over"></div>
                    </Uimage>

                    <Uimage bgc="culture.jpg" show={third} onClick={()=>{setTh()}}> 
                    <div className="over"></div>
                    </Uimage>
                    <Uimage bgc="pradeep.jpg" show={fourth} onClick={()=>{setFo()}}> 
                    <div className="over"></div>
                    </Uimage>
                </Imagelist>
                <div className="actual">
                    <div className="actual_image"></div>
                </div>
            </Images>
            <div className="description">
                <b>Plain Round Neck Blouse</b>
                <div className="rates">
                   <div className="stars">
                   <img src="star.png" alt="tritez rates preview" /> 
                   <img src="star.png" alt="tritez rates preview" /> 
                   <img src="star.png" alt="tritez rates preview" /> 
                   <img src="star.png" alt="tritez rates preview" /> 
                   <img src="star.png" alt="tritez rates preview" /> 
                   </div> 4.9 <label htmlFor="review">(6 reviews)</label>
                </div>
                <div className="prices">
                    $23.50 <label htmlFor="old"><s>$23.50</s></label>
                </div>
                <div className="message">
                    <div className="change">
                        <Swit stat={info} onClick={()=>{
                            setDelivery(false)
                            setFeat(false)
                            setInfo(true)
                        }}>
                            Product info
                        </Swit>
                        <Swit stat={feat}
                        onClick={()=>{
                            setDelivery(false)
                            setFeat(true)
                            setInfo(false)
                        }}>
                            Features
                        </Swit>
                        <Swit stat={delivery} onClick={()=>{
                            setDelivery(true)
                            setFeat(false)
                            setInfo(false)
                        }}>
                            Delivery & Returns
                        </Swit>
                    </div>
                    <p>{parag}</p>
                </div>
                <div className="size">
                    <b>Choose size</b>
                    <div className="boxes">
                        <label>
                            <input type="radio" name="xs" id="size" />
                            <span>XS</span>
                        </label>
                        <label>
                            <input type="radio" name="xs" id="size" />
                            <span>s</span>
                        </label>
                        <label>
                            <input type="radio" name="xs" id="size" />
                            <span>M</span>
                        </label>
                        <label>
                            <input type="radio" name="xs" id="size" />
                            <span>L</span>
                        </label>
                        <label>
                            <input type="radio" name="xs" id="size" />
                            <span>XL</span>
                        </label>
                        <label>
                            <input type="radio" name="xs" id="size" />
                            <span>XXl</span>
                        </label>
                    </div>
                    <b>Choose color</b>
                    <div className="colors">
                    <label>
                            <input type="radio" name="color" id="color" />
                            <Diva first_colors="#EAA046"><span className="dot"></span></Diva >
                        </label>
                        <label>
                            <input type="radio" name="color" id="color" />
                            <Diva  first_colors="#09668A"> <span className="dot"></span></Diva >
                        </label>
                        <label>
                            <input type="radio" name="color" id="color" />
                            <Diva  first_colors="black"> <span className="dot"></span></Diva >
                        </label>
                        <label>
                            <input type="radio" name="color" id="color" />
                            <Diva  first_colors="white"> <span className="dot"></span></Diva >
                        </label>
                        
                    </div>
                </div>
                <div className="add">
                    <p>
                        <label htmlFor="In stock">In stock</label>
                        <br /> Only 2 items left.
                    </p>
                    <div className="addbtn">
                        <Love className="love" add={add} onClick={()=> setAdd(!add)}>
                       { !add ?  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg> :<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>}

                        </Love>
                        <button> <Link href="/user_orders">add to Cart <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></Link></button>
                    </div>
                </div>
            </div>
        </Product_style>
    )
}