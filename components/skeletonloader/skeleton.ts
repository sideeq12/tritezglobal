import styled from "styled-components"


export const SkeletonWrapper = styled.div`
    margin : 20px auto;
    padding: 5px 10px;
    border-radius: 2px;
    position: relative;
    overflow: hidden;
    /* border : 1px solid red; */
    width : 200px;
    background : #f2f2f2;
    height: 180px;
`
export const skeletonArticle = styled.div`
`
interface  skeleType {
    type : string
}
export const Skeleton = styled.div<skeleType>`
    background-color: #ddd;
    margin : 10px 0;
    border-radius: 2px;
    height:${props => props.type == "title" ? " 100px" : "10px"};
    width : ${props => props.type == "title" ? " 100%" : "100%"};
    margin-bottom: ${props => props.type == "title" ? " 12px" : "0px"};;
`

export const ShimmerWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    animation: laoding 2.4s infinite;
    .shimmer{
    width: 50%;
    height: 100%;
    background : rgba(255,255,255,0.3);
    transform: skewX(-20deg);
    box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.05);

    @keyframes laoding {
    0%{
        transform: translateX(-150%);
    }
    50%{
        transform: translateX(-60%);
    }
    100%{
        transform: translateX(150%);
    }
}
}
`
export const LargeWrapper = styled.div`
    margin : 20px auto;
    padding: 10px 15px;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    background : #ddd;
    height: 200px;
    width : 90vw;
`

