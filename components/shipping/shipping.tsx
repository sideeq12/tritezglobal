import { Shipping_style, Shiptitle , Menu_change, Cha, My_link} from "./shipping_style"
import { useState } from "react"

export const Shipping = ()=>{

    const [all, setAll ] = useState(true)
    const [packing, setPacking ] = useState(false);
    const [onDway, setOnDWay ] = useState(false);
    const [delivered, setDelivered ] = useState(false);

    const changeAll = ()=>{
        setAll(true);
        setPacking(false);
        setOnDWay(false)
        setDelivered(false)
    }
    const changePacking = ()=>{
        setAll(false);
        setPacking(true);
        setOnDWay(false)
        setDelivered(false)
    }
    const changeODway = ()=>{
        setAll(false);
        setPacking(false);
        setOnDWay(true)
        setDelivered(false)
    }
    const changeDelivered = ()=>{
        setAll(false);
        setPacking(false);
        setOnDWay(false)
        setDelivered(true)
    }
    return(<>
    <My_link>
        <a href="/">Home </a>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
 <a href="/products_list">Shopping Cart</a> 
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>
 <a href="/user_payment">Checkout</a> 
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg> <a href="/user_orders" className="mai">Tracking Order</a> 
    </My_link>
    <Menu_change>
    <Cha bord={all} onClick={()=> changeAll()} >
        All orders
    </Cha>
    <Cha bord={packing} onClick={()=> changePacking()}>
        Packing
    </Cha>
    <Cha bord={onDway} onClick={()=> changeODway()}>
        On the way
    </Cha>
    <Cha bord={delivered} onClick={()=>changeDelivered()}>
        Delivered
    </Cha>
    </Menu_change>
<Shipping_style>
            <Shiptitle className="shiptitle" check={true}>
                <label className="id">id</label>
                <label className="order">Order</label>
                <label className="price">Price</label>
                <label className="qty">Qty</label>
                <label className="adress">Adress</label>
                <label className="est">Estimated Arrival</label>
                <label className="status">Status</label>
            </Shiptitle>
            <Shiptitle className="shiptitle" check={false}>
                <label className="id">#232</label>
                <label className="order">Plain round Jeans</label>
                <label className="price">$94.55</label>
                <label className="qty">7</label>
                <label className="adress">1245, Charkot NYC. </label>
                <label className="est">12th September 2022</label>
                <label className="status" style={{"color" : "red"}}>Packing</label>
            </Shiptitle>
            <Shiptitle className="shiptitle" check={false}>
                <label className="id">#973</label>
                <label className="order">Brown t-shirt cotton</label>
                <label className="price">$104.55</label>
                <label className="qty">4</label>
                <label className="adress">134, Unit Street california</label>
                <label className="est">13th Aug 2020</label>
                <label className="status" style={{"color" : "#1EAD91"}}>Delivered</label>
            </Shiptitle>
            <Shiptitle className="shiptitle" check={false}>
                <label className="id">#674</label>
                <label className="order">Order</label>
                <label className="price">$85.99</label>
                <label className="qty">01</label>
                <label className="adress">Otile ade ikorodu</label>
                <label className="est"> 15th Dec 2020</label>
                <label className="status"style={{"color" : "#E2B93B"}} >On the way</label>
            </Shiptitle>
            <Shiptitle className="shiptitle" check={false}>
                <label className="id">#232</label>
                <label className="order">Plain round Jeans</label>
                <label className="price">$94.55</label>
                <label className="qty">7</label>
                <label className="adress">1245, Charkot NYC. </label>
                <label className="est">12th September 2022</label>
                <label className="status" style={{"color" : "red"}}>Packing</label>
            </Shiptitle>
            <Shiptitle className="shiptitle" check={false}>
                <label className="id">#973</label>
                <label className="order">Brown t-shirt cotton</label>
                <label className="price">$104.55</label>
                <label className="qty">4</label>
                <label className="adress">134, Unit Street california</label>
                <label className="est">13th Aug 2020</label>
                <label className="status" style={{"color" : "#1EAD91"}}>Delivered</label>
            </Shiptitle>
            <Shiptitle className="shiptitle" check={false}>
                <label className="id">#674</label>
                <label className="order">Order</label>
                <label className="price">$85.99</label>
                <label className="qty">01</label>
                <label className="adress">Otile ade ikorodu</label>
                <label className="est"> 15th Dec 2020</label>
                <label className="status"style={{"color" : "#E2B93B"}} >On the way</label>
            </Shiptitle>
            <Shiptitle className="shiptitle" check={false}>
                <label className="id">#232</label>
                <label className="order">Plain round Jeans</label>
                <label className="price">$94.55</label>
                <label className="qty">7</label>
                <label className="adress">1245, Charkot NYC. </label>
                <label className="est">12th September 2022</label>
                <label className="status" style={{"color" : "red"}}>Packing</label>
            </Shiptitle>
            <Shiptitle className="shiptitle" check={false}>
                <label className="id">#973</label>
                <label className="order">Brown t-shirt cotton</label>
                <label className="price">$104.55</label>
                <label className="qty">4</label>
                <label className="adress">134, Unit Street california</label>
                <label className="est">13th Aug 2020</label>
                <label className="status" style={{"color" : "#1EAD91"}}>Delivered</label>
            </Shiptitle>
            
        </Shipping_style>
    </>
    )
}