import { useEffect, useState } from "react"
import { Carte } from "./cart_style"

interface cont{
    imagelink : string,
    name : string,
    price : number
}

export const Cart = ({ imagelink, name, price} : cont)=>{
    let current_value:number = 1;
    let new_data:string;
    const[datavalue, setData_value] = useState("1");
    const[save, setSave] = useState(false)

    const Increment = () =>{
        current_value = current_value+1;
         new_data =  current_value.toString();
         console.log("our data is ", new_data);
    }
    return(
        <Carte imageshow={imagelink}>
            <div className="imageview"></div>
          <div className="right">
          <div className="details">
            <b>{name}</b>
            <p>
                {`$`+price} <label htmlFor="">More in stock</label>
            </p>
            <div>
                <select name="" id="">
                    <option value="">orange</option>
                    <option value="">blue</option>
                </select>
                <div className="addition">
                    <span onClick={()=>{ }}>-</span>
                    <span>{datavalue}</span>
                    <span onClick={()=> Increment()}>+</span>
                </div>
                <select name="" id="">
                    <option value="">XL</option>
                    <option value="">XXL</option>
                </select>
            </div>
            </div>
            <div className="pric">
                <label htmlFor="$34.99">{`$`+price}</label>
                <div className="but">
                    <span className="first" onClick={()=>setSave(!save)}>{save ? (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E0607E" className="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E0607E" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>)}Save</span>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>Delete</span>
                </div>
            </div>
          </div>
        </Carte>
    )
}