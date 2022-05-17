import styled from "styled-components";

export const Adrress_section = styled.div`
    width: 45vw;
    height  : fit-content;
    padding : 20px 0px 20px 20px;
    /* border : 1px solid green; */
    
    .addr{
        label{
        font-size: small;
        width: 45%;
    }
    input, textarea, select, button{
        background: #FFFFFF;
        border: 1px solid #E6E6E6;
        width : 100%;
        height: 35px;
        border-radius: 3px;
        margin-top: 5px;
    }
    label.adr{
        width : 70%;
    }
    label.apt{
        width  : 25%;
    }
    .firstline{
        display: flex;
        justify-content: space-between;
        margin-top : 10px;
        button:hover{
            cursor: pointer;
        }
        .save{
            color :  #34ADDC;
            background-color: #FFF;
        }
        .canc{
            .can{
                width : fit-content;
                border : none;
            }
                }
    }
    }
    .payment{
        .paylist{
            display: flex;
            padding-top: 30px;
            justify-content: space-around;
            img{
                margin : 0px 10px;
                height: 20px;
            }
        }
        .paypal, .paystack{
            padding : 10px 40px;
            font-size: small;
            color : white;
            background: #34ADDC;
            box-shadow: 0px 12px 32px rgba(52, 173, 220, 0.25);
            border-radius: 10px;
            width : fit-content;
            margin : 20px auto;
        }
        .data {
            padding : 20px 0px;
            .firstpay{
                font-size: small;
            margin-top: 10px;
            input{
                width : 100%;
                margin-top: 5px;
                height: 35px;
                background: #FFFFFF;
                border: 1px solid #E6E6E6;
            }
        }
        button{
            background: #34ADDC;
            box-shadow: 0px 12px 32px rgba(52, 173, 220, 0.25);
            border-radius: 10px;
            font-size: small;
            color : white;
            margin-top: 10px;
            border : none;
            padding : 10px 50px;
            &:hover{
                cursor: pointer;
            }
        }
        .firstpays{
            padding-top: 10px;
            display: flex;
            font-size: small;
            label{
                input{
                    width : 90%;
                    margin-top: 5px;
                    height: 35px;
                background: #FFFFFF;
                border: 1px solid #E6E6E6;
                }
            }
            label.exp{
                width : 60%;
            }
            label.cvv{
                width : 200px;
            }
    }
    }
}
@media (max-width: 720px) {
        width : 90vw;
        font-size: smaller;
        .addr{
    label.adr{
        width : 60%;
    }
    label.apt{
        width : 30%;
    }
            label.send{
                width : 80%;
                button{
            width : fit-content;
        }
            }
        }
    }
   
   
`