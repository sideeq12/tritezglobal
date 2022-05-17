import styled from "styled-components";

interface showbg{
    showFil : boolean
}

export const SPAN = styled.span`
    margin-top: 50px;
    margin-left : 50px;
    a{
        color : #C9C9C9;
    }

    label{
        color : #09668A;
    }

    @media (max-width: 720px) {
        margin-left: 20px;
        font-size: small;
    }
`

export const Filter = styled.div<showbg>`
    width : 90vw;
    display: flex;
    margin:  0px auto;
    max-height: 1500px;
    text-align: center;
    margin-bottom: 30px;
    padding-left: ${props => props.showFil ? "10px" : "20px"};
    padding-bottom: 50px;

    .filter{
        width : 25vw;
        margin-left: ${props => props.showFil ? "0vw" : "-25vw"};
        max-width: 240px;
        h5{
            font-family: 'Tinos';
            font-size: 20px;
        }
    }
    .carts{
        padding-top: 50px;
        margin-right: ${props => props.showFil ? "0px" : "-100px"};
        margin-right: auto;
        .cart_show{
        width : ${props => props.showFil ? "70vw" : "90%"};
        margin : 0px auto;
        transition: width .2s ease-in-out .5s;
        display: flex;
        padding : 50px 20px;
        justify-content: space-around;
        gap : 1rem;
        flex-wrap: wrap;
        max-height : 900px;
        overflow-y: scroll;
        /* max-width: 900px; */
        margin-bottom: 40px;
    }
    .showAnimation{
        padding-bottom: 20px;
        display: flex;
        justify-content: space-between;
        width : ${props => props.showFil ? "100%" : "85vw"};
        margin :0px auto;

        span{
            &:hover{
                cursor: pointer;
            }
            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Open Sans';
            gap: 0.3rem;
            label{
                color: #5A5A5B;
                font-size: 15px;
            }
        }
    }
    a.next{
        padding : 15px 30px;
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        margin : 10px auto;
    }
    }


    @media (max-width : 720px) {
        .filter{
            display: none;
            
        }
        .carts{
            width : 95vw;
            margin-left: -30px;
            padding : 0px;
            .cart_show{
                margin : 0px;
                width : 95vw;
                justify-content: space-around;
                margin-right: 10px;
                gap : 0.5rem;
                padding: 0px;
                margin-bottom: 50px;
            }
        }
        .showAnimation{
            width : 80vw;
            padding-left: 20px;
            span.left{
                display: none;
            }
        }
        a.next{
            padding : 5px 20px;
            font-size: small;
        }
    }
`


export const Cate = styled.div`
    height: fit-content;
    width :200px;
    margin-top: 20px;
    background: #FFFFFF;
    box-shadow: 0px 16.3926px 36.8834px rgba(115, 115, 115, 0.2);
    border-radius: 5px;
    font-family: 'Open Sans';
    padding: 40px 30px 20px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .container{
        margin: 30px 10px;;
        width : 90%;
        gap : 1rem;
        display : flex ;
        flex-direction: column;
        
        label{
            display: flex;
            justify-content: space-between;
            font-size: small;

            input[type="radio"]{
                color : #34ADDC;
                background-color: #34ADDC;
            }
        }
    }
`

export const Sieve = styled.div`
    display: none;
     @media (max-width: 720px) {
        display: flex;
        margin : 25px 0px;
        width : 100%;
        justify-content: space-around;
        padding-left: 10px;
        select{
            height: 35px;
            background: #FFFFFF;
            border: 1px solid #C2C9D1;
            font-size: 10px;
            padding : 0px 20px;

            border-radius: 5px;

        }
        label{
            background-color: #34ADDC;;
            display: flex;
            justify-content: center;
            align-items: center;
            padding : 10px;
            border-radius: 5px;
        }
     }
`