import { Adrress_section } from "./address_style"
import { useState } from "react"
import Link from "next/link"

export const My_address = ()=>{
    const [gateway, setGateway] = useState("card")
    return(
        <Adrress_section>
                <div className="addr">
                    <form action="">
                        <div className="firstline">
                            <label htmlFor="">
                                <span>First name *</span> <br />
                            <input type="text" name="" id="" />
                            </label>
                            <label htmlFor="">
                                <span>Last name *</span> <br />
                            <input type="text" name="" id="" />
                            </label>
                        </div>
                        
                        <div className="firstline">
                            <label className="adr" htmlFor="">
                                <span>Residential address *</span> <br />
                            <textarea  name="" id="" />
                            </label>
                            <label htmlFor="" className="apt">
                                <span>Apt suite No *</span> <br />
                            <input type="text" name="" id="" />
                            </label>
                        </div>
                        <div className="firstline">
                            <label htmlFor="">
                                <span>City *</span> <br />
                            <input type="text" name="" id="" />
                            </label>
                            <label htmlFor="">
                                <span>Country *</span> <br />
                            <select>
                                <option value="Country">Select Country</option>
                                <option value="Country">Algeria</option>
                                <option value="Country">Nigeria</option>
                                <option value="Country">United States</option>
                            </select>
                            </label>
                        </div>
                        <div className="firstline">
                            <label htmlFor="">
                                <span>Postal Code *</span> <br />
                            <input type="text" name="" id="" />
                            </label>
                            <label htmlFor="">
                                <span>Phone number *</span> <br />
                            <input type="text" name="" id="" />
                            </label>
                        </div>
                        <div className="firstline">
                            <label className="send" htmlFor="">
                                <button className="save">Save and Deliver Here</button>
                            </label>
                            <label htmlFor="" className="canc">
                                <button className="can">Cancel</button>
                            </label>
                        </div>
                    </form>
                </div>
                <div className="payment">
                    <div className="paylist">
                        <label onClick={()=> setGateway("card")}>
                            <input type="radio" name="pay" id="pay" />
                            <img src="card.svg" alt="" /> Cards
                        </label>
                        <label onClick={()=> setGateway("paypal")}>
                            <input type="radio" name="pay" id="pay" />
                            <img src="paypal.png" alt="" /> Paypal
                        </label>
                        <label onClick={()=> setGateway("paystack")}>
                            <input type="radio" name="pay" id="pay" />
                            <img src="paystack.png" alt="" /> Paystack
                        </label>
                    </div>
                   {gateway ==="card" && ( <div className="data"> 
                        <div className="firstpay">
                            <span>Name on the Card *</span>
                            <input type="text" required/>
                        </div>
                        <div className="firstpay">
                            <span>Card Number *</span>
                            <input type="text" required/>
                        </div>
                        <div className="firstpays">
                            <label className="exp">
                                <span>Expiry Date *</span> <br />
                                <input type="text" />
                            </label>
                            <label className="cvv">
                                <span>CVV *</span> <br />
                                <input type="text" />
                            </label>
                        </div>
                        <Link href="/user_orders"><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-check" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg> Pay $455.76</button></Link>
                    </div>)}
                    {gateway === "paypal" && (<div className="paypal">Pay $234.88 vial Paypal </div>)}
                    {gateway === "paystack" && (<div className="paystack">Pay $234.88 vial Paystack </div>)}
                </div>
        </Adrress_section>
    )
}