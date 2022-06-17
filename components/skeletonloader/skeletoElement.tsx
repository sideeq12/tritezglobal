
import { Skeleton } from "./skeleton";

interface skeletonType {
    type : string
}
const SkeletonELement = ({type} : skeletonType)=>{
    // const classes = `skeleton ${type}`
    return(
        <Skeleton type={type}></Skeleton>
    )
}

export default SkeletonELement;