
import { Skeleton } from "./skeleton";

interface skeletonType {
    type : string
}
const SkeletonELement = ({type} : skeletonType)=>{
    return(
        <Skeleton type={type}></Skeleton>
    )
}

export default SkeletonELement;