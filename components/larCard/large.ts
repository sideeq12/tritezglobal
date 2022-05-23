import styled from "styled-components";

interface Props {
    first : string,
    second : string
}


export const Larger = styled.div<Props>`
    width :90vw;
    margin : 10px auto;
    height: 200px;
    border: 10px;
    display: flex;
    position: relative;
    z-index: -1;
    h5{
        position: absolute;
        font-family: 'Tinos';
        color : white;
        font-size: 45px;
    left: 45%;
    letter-spacing: 2px;
    }
    .left, .right{
        width : 50%;
        height: 100%;
        img{
            height: 100%;
            width : 100%;
        }
    }
    .left{
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        background-image: url(${props => props.second});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        img{
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            display: none;
        }
    }
    .right{
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        background-image: url(${props => props.first});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        img{
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            display: none;
        }
    }
    .covers{
        position: absolute;
        top : 0px;
        height: 100%;
        width : 100%;
        border-radius: 10px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.53) 100%);
    }

    @media (max-width: 720px) {
        height: 150px;
        h5{
            left : 35%;
            font-size: 30px;
            top : -3px;
        }
    }
`