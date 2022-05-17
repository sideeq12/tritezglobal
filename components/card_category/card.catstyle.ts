import styled from "styled-components";

interface bg{
    show_image: string
}

export const Cart_cat = styled.div`
    padding-top: 0px;
    height: 180px;
    min-width : 180px;
    text-align: center;
    margin-top: 20px;
    
    .cover{
        height: 80%;
        width : 100%;
        border-radius: 15px;
        margin-bottom: 10px;
        position: relative;

        .them{
            height: 100%;
            border-radius: 15px;
            position: absolute;
            top : 0px;
            width : 100%;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.74) 100%);
        }
        .img{
            height: 100%;
            width : 100%;
            border-radius: 15px;
            /* background-image: url("cool_hair.jpg"); */
            background-size: cover;
        }
    }
    @media (max-width : 720px) {
        height: 150px;
        min-width : 150px; 
    }
`
export const List_category = styled.div`
    width : 100vw;
    padding : 10px 5vw;
    display: flex;
    gap : 1rem;

    @media (max-width: 720px) {
        overflow: auto;

        &::-webkit-scrollbar{
            width: 0;
            display: none;
        }
    }
`

export const Img_bg = styled.div<bg>`
    background-image: url(${props => props.show_image});
`