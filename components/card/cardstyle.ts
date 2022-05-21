import { Interface } from "readline";
import styled from "styled-components";

interface details{
    color : string,
    stock : boolean
}
export const Card_Layout = styled.div<details>`
        font-family: 'Montserrat';
        height:  300px;
        width : 260px;
        border : 1px solid rgba(0,0,0,0.1);
        margin-top: 10px;

        .image{
                height: 60%;
                width : 100%;
                background-image: url(${props => props.color});
                background-size : cover;
                background-position: center;
        }
        .description{
                height: 40%;
                padding : 15px 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                text-align: left;
                .first{
                        font-size: small;
                        margin-bottom: 10px;
                        display: flex;
                        justify-content: space-between;
                        span{
                                color : black;
                                font-weight: bold;
                                font-size: 12px;
                        }
                }
                img{
                        height: 10px;
                        width : 10px;
                        margin-right: 5px;
                }
                .second{
                        span {
                                color : #34ADDC;
                        }
                        s{
                                color : #5A5A5B;
                                font-size:14px;
                                margin-left: 10px;
                        }
                }
                .last{
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-end;

                        div label{
                            font-size: small;
                                color : ${props=> props.stock  ? "#34ADDC" : "red"};
                        }
                         a{
                                color : #34ADDC;
                                border-bottom: 1px solid #34ADDC;
                                padding-bottom: 3px;
                        }
                }
        }

        &:hover{
                box-shadow: 0px 16px 36px rgba(115, 115, 115, 0.2);
                transition: .2s;
        }

        @media (max-width: 990px) {
                width: 260px;
                height: 300px;
        }

        @media (max-width: 720px) {
            width: 150px;
            height: 270px;
            .description{
                margin-top: 10px;
                padding : 3px 2px;
                .first{
                    font-size: xx-small;
                    span{
                        font-size: 10px;
                        max-width: 60%;
                    }
                    label{
                        display: flex;
                        align-items: flex-end;
                        font-size: 10px;
                    }
                }
                .second, .last{
                    font-size: 12px;
                }
                .second {

                    s{
                        font-size: 8px;
                    }
                }
                .last{
                    div{
                        font-size: 8px;
                    }
                    a{
                        font-size: 10px;
                    }
                }
            }
        }

`

export const Card_List = styled.div`
        display: flex;
        padding : 30px 50px;
        gap : 1rem;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        margin : 10px auto;


        @media (max-width : 720px) {
                width : 90vw;
                /* border : 1px solid red; */
                padding: 10px 0px 0px 0px;
        }
`

export const Coverchain = styled.div`
    height: fit-content;
    margin : 0px auto;
    width : 90vw;
    .change{
        display: flex;
        width : 90vw;
        margin : 10px auto;
        align-items : flex-end;
        justify-content: space-between;
        div{
            height: fit-content;
            width : 50%;
            h3{
                font-size: 30px;
                font-family: "Tinos";
            }
        }
            .action{
                display: flex;
                width : 40%;
                margin-left: auto;
                .cha{
                    margin-right: 15px;
                    border-bottom: 1px solid #34ADDC;
                    padding-bottom: 5px;
                    &:hover{
                        cursor: pointer;
                    border-bottom: 2px solid #34ADDC;
                }
                }
            }

        
    }
    .next{
        margin : 40px auto 100px;
        text-align: center;
        a{
            padding : 5px 50px;
            border : 2px solid black;
            border-right : none;
            border-left: none;
        }
    }

    @media (max-width: 720px) {
        .change{
            flex-direction: column;
            width: 90vw;
            margin : 0px;
            div{
                width : 90vw;
                justify-content: flex-start;
                align-items: flex-start;
                p{
                    font-size: small;
                }
            }
            .action{
                width : 90vw;
            }
        }
    }
`