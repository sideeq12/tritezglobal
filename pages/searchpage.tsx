        import { Sieve, Filter, Cate , SPAN} from "../styles/pr_list";
        import { useState } from "react";
        import { database } from "../components/card/database";
        import { Card } from "../components/card/card";
import { Search_Bar } from "../components/search/search";
import Link from "next/link";

 const Search_Page = () =>{
    const [showFilter, setShowFilter ] = useState(true)
    const product = database
const products = [...product, ...product]
    return (
        <> 
        <SPAN> <Link href="/categories">Clothes and Accesories </Link> {">"} <label htmlFor="Clothes">Clothes</label></SPAN>
        <Search_Bar />
        <Sieve>
            <select name="" id="">
                <option value="">Category</option>
            </select>
            <select name="" id="">
                <option value="">Size</option>
                <option value="">extra Large</option>
                <option value="">Large</option>
                <option value="">Medium</option>
                <option value="">Small</option>
                <option value="">Extra small</option>
            </select>
            <select name="" id="">
                <option value="">price</option>
            </select>
            <label htmlFor="">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-funnel" viewBox="0 0 16 16">
  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
</svg>
            </label>
        </Sieve>
        <Filter showFil={showFilter}> 
        <div className="filter">
                <h5>FILTER BY</h5>
        <Cate>
            <b>Categories</b>
            <div className="container">
                 <label>
                    <span>Collections</span>
                    <input type="radio" id="Collections" name="radio"/>
                </label>
                <label>
                    <span>Popular Products</span>
                    <input type="radio" id="Popular Products" name="radio"/>
                </label>
                <label>
                    <span>New Arrival</span>
                    <input type="radio" id="New Arrival" name="radio"/>
                </label>
                <label>
                    <span>Recommended</span>
                    <input type="radio" id="Recommended" name="radio"/>
                </label>
            </div>

        </Cate>
        <Cate>
            <b>Size</b>
            <div className="container">
                 <label>
                    <span>Extra Large</span>
                    <input type="radio" id="Collections" name="radio"/>
                </label>
                <label>
                    <span> Large</span>
                    <input type="radio" id="Popular Products" name="radio"/>
                </label>
                <label>
                    <span>Medium</span>
                    <input type="radio" id="New Arrival" name="radio"/>
                </label>
                <label>
                    <span>Small</span>
                    <input type="radio" id="Recommended" name="radio"/>
                </label>
                <label>
                    <span>Extra small</span>
                    <input type="radio" id="Recommended" name="radio"/>
                </label>
            </div>

        </Cate>
            </div>
            <div className="carts">
                <div className="showAnimation">
                    <span className="left" onClick={()=> setShowFilter(!showFilter)}>
                        { showFilter ? <>Hide Filter
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
</svg>
</> : <> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
</svg> show Filter  
</>}
                    </span>
                    <span>234 <label htmlFor="">Products showed</label> </span>
                </div>
            <div className="cart_show">
            {products.map((data)=> <Card 
            key={Math.floor(Math.random()*3899)}
             name={data.name}
             imageLink={data.image_link}
             rate={data.rate}
             rate_count={data.rate_count}
             price={data.price}
             old_price={data.old_price}
             in_stock={data.instock}
             items_left={data.items_left}
             />)}
            </div>
            <Link href="/" className="next">Next</Link>
            </div>
        </Filter>
        </>
    )
}

export default Search_Page;