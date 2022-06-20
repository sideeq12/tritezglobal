import styled from "styled-components";


export const Right = styled.div`
    display: flex;
    width: fit-content;
    align-items: center;
    height : fit-content;
    justify-content: space-around;
    gap : 0.2rem;
    .search,.cart{
        border-radius: 100%;
        padding : 10px; 
    }
    .search svg, .cart svg{
        height: 16px;
        width : 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
    }
    .search:hover, .cart:hover{
        cursor: pointer;
    }
    .search{
        border: 1px solid #D3EDF8;
        
    }
    .cart{
        background: #66C8EE;
        box-shadow: 2px 4px 4px rgba(102, 200, 238, 0.25);

        svg{
            color : white;
        }
    }
    @media (max-width: 720px) {
        width: fit-content;
        margin-right: 10px;
     .search, .cart{
         margin-right: 5px;
     }
    }
`