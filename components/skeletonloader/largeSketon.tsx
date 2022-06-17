import { LargeWrapper } from "./skeleton"
import Shimmer from "./shimer"


export const LargeSkeleton = ()=>{
    return(
        <LargeWrapper>
             {/* <div className="skeleton-article">
            <SkeletonELement type="title" />
            <SkeletonELement type="text" />
            <SkeletonELement type="text" />
            <SkeletonELement type="text" />
            </div> */}
            <Shimmer />
        </LargeWrapper>
    )
}