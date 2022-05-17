import styled from "styled-components";

interface change{
    check : boolean
}

interface stat {
    statView : string
}

interface bor{
    bord : boolean
}

export const Shipping_style = styled.div`
    width : 90vw;
    margin : 5px auto 100px;
    min-height : 500px;
    font-family: 'Open Sans';
    .shiptitle{
        height : 70px;
        display: flex;
        label{
            height: 100%;
            width : 100px;
            text-align: left;
            display: flex;
            align-items: center;
        }
        label.id, label.status, label.price{
            width : 10%;
        }
        label.id{
            padding-left: 20px;
        }
        label.est, label.order{
            width :20%;
        }
        label.adress{
            width : 25%;
        }
        label.qty{
            width : 5%;
        }
    }

    @media (max-width: 720px) {
        width : 98vw;
        font-size: x-small;
        label.order{
            padding-left: 15px;
        }
    }
`

export const Shiptitle = styled.div<change>`
    background-color : ${props => props.check ? "#D3EDF8" : "#FFF"};
    font-size : ${props => props.check ? "normal" : "small"};
    color : ${props => props.check ? "#09668A" : "#343434"};
    border-radius: ${props => props.check ? "5px" : "0px"};
    margin-bottom: ${props => props.check ? "15px" : "0px"};
    margin-top: ${props => props.check ? "50px" : "0px"};
    border-bottom: ${props => props.check ? "none" : "1px solid rgba(0,0,0,0.3)"};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    label.price{
        color : ${props => props.check ? "#09668A" : "#34ADDC;"};
    }
    label.price, label.order{
        font-weight: 700;
    }
    @media (max-width: 720px) {
        font-size: xx-small;
    }
`

export const SPAN = styled.span<stat>`
    color : ${props => props.statView === "packing" ? "#1EAD91" : " #E2B93B"};
`

export const Menu_change = styled.div`
    width : 90vw;
    margin : 25px auto 0px;
    display: flex;
`

export const Cha = styled.div<bor>`
    border-bottom: ${props => props.bord  ? "2px solid #09668A" : "none"};
    color : ${props => props.bord ? "black" : "#5A5A5B"};
    width : fit-content;
    padding : 10px 35px 10px 10px;
    margin-right: 20px;
    &:hover{
        cursor: pointer;
    }
`

export const My_link = styled.div`
    font-family: 'Open Sans';
    padding-left: 5vw;
    margin-top: 25px;
    a, svg{
        color : #C9C9C9;
    } 
    a.mai{
        color : #09668A;
    }
`