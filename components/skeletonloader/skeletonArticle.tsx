import { SkeletonWrapper } from "./skeleton";

import Shimmer from "./shimer";
import SkeletonELement from "./skeletoElement"
interface themetype  {
    theme : string
}
const SkeletonArticle = ({theme} : themetype)=>{
    const themeClass = theme || "light"
    return(
        <SkeletonWrapper>
            <div className="skeleton-article">
            <SkeletonELement type="title" />
            <SkeletonELement type="text" />
            <SkeletonELement type="text" />
            <SkeletonELement type="text" />
            </div>
            <Shimmer />
        </SkeletonWrapper>

    )
}

export default SkeletonArticle;