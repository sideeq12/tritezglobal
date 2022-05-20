import styled from "styled-components";

interface props{
    stat : boolean,
}
interface colors{
    first_colors : string
}
interface bg{
    bgc : string,
    show : boolean
}
interface bgco{
    mainpics : string
}
interface addl{
    add : boolean
}

export const Product_style = styled.div`
    display: flex;
    width: 90vw;
    margin : 20px auto;
    height: 550px;

    .description{
        width : 50%;
        padding : 40px;

        b{
            font-family: "Tinos";
            font-size: 20px;
        }
        .rates{
            display: flex;
            margin-top: 5px;
            font-size: small;
            align-items: flex-end;
            gap : 0.3rem;
            .stars{
                img{
                    height: 10px;
                }
            }

            label{
                    color :#34ADDC;
                    font-family: "Monteserrat";
                    font-size: smaller;
                }
        }
        .prices{
            color : #34ADDC;
            margin : 15px 0px;
            font-family: 'Open Sans';
            font-weight: bolder;
            font-size: 20px;

            label{
                color : black;
                font-size: small;
            }
        }
        .message{
            .change{
                display: flex;
                gap : 1rem;
                a{
                    font-size: small;
                    font-family: 'Open Sans'
                }
            }
            p{
                height: 60px;
                font-size: smaller;
                color : #5A5A5B;
                width : 80%;
            }
        }
        .size{
            padding : 0px;
            b{
                font-family: 'Open Sans';
                font-size: 18px;
            }
            .boxes{
                margin-bottom: 15px;
                margin-top: 12px;
                label{
                    input[type="radio"]{
                        display: none;
                    }
                    span{
                        padding : 10px 15px;
                        font-size: smaller;
                        color : white;
                        border-radius: 10px;
                        background-color: #E5E5E5;
                        color : black;
                        margin-right: 10px;
                    }
                    span:hover{
                        cursor: pointer;
                    }
                    input[type="radio"]:checked+span{
                        color : white;
                        background-color: #34ADDC;
                    }
                }
            }
            .colors{
                display: flex;
                gap : 1rem;
                b{
                    font-size: 18px;
                }
                label{
                    margin-top: 5px;
                    input{ display : none}
                    div{
                        width : 30px;
                        height: 30px;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        span{
                            height: 10px;
                            width : 10px;
                            border-radius: 50%;
                            background-color: white;
                            display: none;
                        }
                        &:hover{
                            cursor: pointer;
                        }
                    }
                    input[type="radio"]:checked+div span{
                        display: block;
                    }
                }
            }
        }
        .add{
            label{
                color: #34ADDC;
                font-weight: bold;
            }
            .addbtn{
                display: flex;

                .love{
                    padding : 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    background-color: #E5E5E5;
                    margin-right: 10px;
                }
                button{
                    border: none;
                    width : 70%;
                    border-radius: 10px;
                    color : white;
                    background-color:#34ADDC;
                    label{
                        color : white;
                    }
                }
                button:hover{
                    cursor: pointer;
                }
            }
        }
    }
    @media (max-width : 720px) {
        flex-direction: column;
        height: 700px;
        .description{
            width: 100%;
            padding: 15px 0px;
            b, .prices{
                font-size: 15px;
            }
            .prices{
                margin : 5px;
                margin : 0px;
                label{
                    font-size: 10px;
                }
            }.message{
                margin-top: 10px;
            }
            .message p{
                width : 100%;
                font-size: smaller;
            }
            .size{
                margin-top: -10px;
                .boxes{
                    margin : 10px 0px;

                    label span{
                        padding : 5px 10px;
                        font-size: smaller;
                    }
                }
            }
            .size b{
                font-size: 12px;
            }
            .add{
                width : 90%;
                .addbtn button{
                    width: 100%;
                }
            }
        }
    }
`

export const Swit =  styled.a<props>`
        font-weight: ${props => props.stat ? "bold" : "normal"};
        border-bottom: ${props => props.stat ? "2px solid #09668A" : "none"};

        &:hover{
            cursor: pointer;
        }
`
export const Diva = styled.div<colors>`
    background-color: ${props => props.first_colors};
    border : 1px solid #E5E5E5;
`

export const Images = styled.div<bgco>`
    width : 50%;
    height: 100%;
     display: flex;
     .actual{
         width : 75%;
         height: 100%;
         border-left : 2px solid #C9C9C9;

         .actual_image{
             width : 98%;
             height: 100%;
             background-image: url(${props => props.mainpics});
             background-size: cover;
             background-position: center;
             margin-left: auto;
         }
     }
     @media (max-width: 720px) {
         width : 100%;
         height: 400px;
         flex-direction: column-reverse;
         .actual{
             width : 100%;
             height: 73%;
             border-left: 0px;
             border-bottom : 2px solid #C9C9C9;
             padding-bottom: 5px;
             margin-bottom: 5px;
             .actual_image{
                 width: 100%;
             }
         }
     }
`

export const Imagelist =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width : 23%;
    margin-right: 8px;

    @media (max-width: 720px) {
        height: 23%;
        flex-direction: row;
        width: 100%;
        gap: 00.3rem;
        div{
            height: 100%;
        }
    }

`

export const Uimage = styled.div<bg>`
    width : 100%;
    height: 24%;
    position: relative;
    background-image: url(${props => props.bgc});
             background-position: center;
    background-size: cover;
    &:hover{
        cursor: pointer;
    }

    .over{
        position: absolute;
        height: 100%;
        width: 100%;
        background: #F7F7F7;
        opacity: 0.5;
        display: ${props => props.show ? "none" : "block"};
    }
`
export const Love = styled.div<addl>`
    &:hover{
        cursor: pointer;
    }
`