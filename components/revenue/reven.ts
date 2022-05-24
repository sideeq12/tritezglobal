import styled from "styled-components";

export const My_rev = styled.div`
    /* border : 1px solid red; */
    width : fit-content;
    height : fit-content;
    padding : 20px 60px;
    display: flex;
    background: #FFFFFF;
box-shadow: 0px 2.10101px 4.20202px rgba(0, 0, 0, 0.1);
border-radius: 5px;
justify-content: center;
align-items: center;
margin : 10px;
max-width : 300px;
   .icom{
       background-color: #D3EDF8;
        border-radius: 100%;
        padding : 10px;
        height: fit-content;
        margin-right: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    svg{
        color : #66C8EE;
    }
   }

    p{  
        display: flex;
        flex-direction: column;
        font-family: 'Open Sans';
        font-weight: bold;
        label{
            margin-top: 5px;
            font-size: small;
            color: #5A5A5B;
        }
    }

`

export const Revl = styled.div`
    width: 50vw;
    border : 1px solid red;
    display: flex;
    margin : 10px auto;
    flex-wrap: wrap;
`