import { SkeletonWrapper } from "./skeleton";

import Shimmer from "./shimer";
import SkeletonELement from "./skeletoElement"

const SkeletonArticle = ()=>{
    return(
       <div style={{"display" : "flex", "flexWrap" : "wrap", "gap" : "1rem"}}>
           {
               [1,2,3,4,5,6].map(each =>  <SkeletonWrapper key={each}>
                <div className="skeleton-article">
                <SkeletonELement type="title" />
                <SkeletonELement type="text" />
                <SkeletonELement type="text" />
                <SkeletonELement type="text" />
                </div> )
            <Shimmer />
        </SkeletonWrapper>)
           }
       </div>

    )
}

export default SkeletonArticle;