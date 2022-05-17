import styled from "styled-components";


export const Right = styled.div`
    display: flex;
    width: 120px;
    align-items: center;
    height : fit-content;
    justify-content: space-around;
    .search, .cart{
        height: 32px;
        width : 32px;
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
     margin-right : 5vw ;
    }
`