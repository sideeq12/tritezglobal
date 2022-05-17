import { Rates , All_bars} from "./rate_style"



export const Rate_section = ()=>{
    return(
        <Rates>
            <div className="left">
                <div className="ra">
                    4.8 <label htmlFor=""> out of 5</label>
                </div>
                <div className="merger">
                <div className="allimages">
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                    <img src="star.png" alt="" />
                </div>
                <p>6 reviews</p>
            </div>
                </div>
            <div className="allstars">
               <div className="all_bars">
                   <span>5 stars</span> <div className="cov">
                       <div className="inn"></div>
                   </div>
               </div>
               <div className="all_bars">
                   <span>4 stars</span> <div className="cov">
                       <div className="inn"></div>
                   </div>
               </div>
               <All_bars stat={true} className="all_bars">
                   <span>3 stars</span> <div className="cov">
                       <div className="inn"></div>
               </div>
                   </All_bars>
               <All_bars stat={true} className="all_bars">
                   <span>2 stars</span> <div className="cov">
                       <div className="inn"></div>
               </div>
                   </All_bars>
                   <All_bars stat={true} className="all_bars">
                   <span>1 stars</span> <div className="cov">
                       <div className="inn"></div>
               </div>
                   </All_bars>
            </div>
        </Rates>
    )
}