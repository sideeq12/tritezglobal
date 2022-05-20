import styled from "styled-components";


export const Pay_cov = styled.div`
        display: flex;
        justify-content: space-evenly;
    .usercart{
        width : 30vw;
        height : fit-content;
        margin-bottom: 50px;
    }
    h3, h4{
            font-family: 'Tinos';
            text-align: center;
        }
    .calc{
        display: flex;
        flex-direction: column;
        gap : 1rem;
        margin-top: 20px;

        span{
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            label{
                color : #5A5A5B;
            }
            label.bol{
                color : black;
            }
        }
        span.total{
            color : white;
            padding : 15px 0px;
            background-color: #34ADDC;
            label{
                color : white;
            }
        }
    }

    @media (max-width: 720px) {
        flex-direction: column;
       .calc{
           width : 95vw;
           margin-left: 10px;
       }
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