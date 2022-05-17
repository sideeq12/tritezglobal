import { Cate } from "./cate_style"


export const Fil_cat = ()=>{
    return(
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

    )
}