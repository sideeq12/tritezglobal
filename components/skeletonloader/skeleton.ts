import styled from "styled-components"


export const SkeletonWrapper = styled.div`
    margin : 20px auto;
    padding: 10px 15px;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    background : #f2f2f2;
`
export const skeletonArticle = styled.div`
`
interface  skeleType {
    type : string
}
export const Skeleton = styled.div<skeleType>`
    background-color: #ddd;
    margin : 10px 0;
    border-radius: 4px;
    height:${props => props.type == "title" ? " 25px" : "12px"};
    width : ${props => props.type == "title" ? " 40%" : "100%"};
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


//  .shimmer-wrapper{
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     top: 0;
//     left: 0;
//     animation: laoding 2.4s infinite;
// }

// .dark .shimmer{
//     background : rgba(255, 255, 255, 0.13);
// }


// .skeleton-wrapper.dark .skeleton{
//     background : #777;
// }
// .skeleton-wrapper.light, .user-wrap.light{
//     background : #f2f2f2;
// }
// .skeleton-wrapper.dark, .user-wrap.dark{
//     background : #444;
// }

// skeleton{
//     background-color: #ddd;
//     margin : 10px 0;
//     border-radius: 4px;
// }
// .skeleton.title{
//     height: 25px;
//     margin-bottom: 12px;
//     width: 40%;
// }

// .skeleton.text{
//     width: 100%;
//     height: 12px;
// }
// .skeleton-wrapper{
//     margin : 20px auto;
//     padding: 10px 15px;
//     border-radius: 5px;
//     position: relative;
//     overflow: hidden;
// }
// .user-wrap{
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content:center;
//     padding : 10px 15px;
//     border-radius: 5px;
//     position: relative;
//     overflow: hidden;
// }
