import styled from "styled-components";



export const Footer_style = styled.div`
    background-color:  #D4EEF8;
    margin-top: 20px;
    padding : 60px 30px;
    font-size: 15px;
    font-family: 'Open Sans';

    div.first{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        color : #5A5A5B;

        .details, ul{
            width: 20%;
        }
        ul li {
            list-style: none;
            margin-top: 20px;
        }
        ul li:nth-child(1){
            margin-top: 0px;
            color : black;
            font-weight: bold;
        }
        ul li a:hover{
            color : blue;
            transition: .3s;
        }
    }
    div.second{
        margin-top: 20px;
        border-top: 1px solid white;
        padding-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img{
            height: 30px;
            margin-right: 10px;
        }
    }


    @media (max-width : 720px){
        div.first{
            .details{
                width : 40%;
            }
            ul{
                margin-left: -30px;
                width : 50%;
            }
        }
        div.second{
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        }
    }

    @media (max-width : 420px){
        div.first{
            justify-content: flex-start;
            .details{
                width : 70%;
            }
        }
    }
`