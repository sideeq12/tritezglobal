import styled from "styled-components";


interface bf{
    imageshow : string
}


export const Carte = styled.div<bf>`
    margin : 15px auto;
    width : 100%;
    display: flex;
    height: 240px;
    border-top: 1px solid #C9C9C9;
    padding-top: 20px;
    /* border: 1px solid red; */

    .imageview{
        background-image : url(${props => props.imageshow});
        height: 100%;
        background-size: cover;
        width  : 20%;
        border-radius: 10px;
    }
    .right{
        width : 80%;
        display: flex;
        justify-content: space-between;
    }
    .details{
        font-family: 'Open Sans';
        width : 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding : 0px 20px;
        justify-content: center;
        p{
                font-size: 15px;
                color : #5A5A5B ;
                font-family: 'Open Sans';
                label{
                    color : #66C8EE;
                    font-size: 18px;
                    margin-left: 20px;
                    font-weight: bold;
                }
            }

        div{
            display: flex;
            gap : 1rem; 
            select{
                background-color: white;
                border-radius: 3px;
            border:  1px solid #C9C9C9;
            padding : 5px 10px;
            }
            span{
                padding : 5px 15px;
                border-radius: 3px;
            border:  1px solid #C9C9C9;
            }
            span:hover{
                cursor: pointer;
            }
        }
    }
    .pric{
        padding : 30px 0px 0px 15px;
            height: 50%;
            margin : auto 0px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-end;
        label{
            color : #34ADDC;
            font-weight: bolder;
        }
        .but{
            width : 100%;
            display: flex;
            flex-direction: row;
            span{
                font-size: small;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-bottom: 10px;
                svg{
                    margin-right: 10px;
                }
            }
            span:hover{
                cursor: pointer;
                border-bottom: 1px solid red;
            }
            .first{
                margin-right: 30px;
            }
        }
    }
    @media (max-width: 990px) {
        .details {
            div {
                select{
                padding : 3px 5px;
                font-size: small;
                width : 100px;
                }

                span{
                    padding : 0px 5px;
                    /* display: none; */
                }
        }
        }
        .pric{
            span svg{
                margin-right: 5px;
            }
        }
    }
    @media (max-width: 720px) {
        flex-direction: column;
        height:400px;
        .right, .imageview{
            width: 100%;
        }
        .imageview{
            height: 200px;
        }
        .right{
            flex-direction: column;
            .details{
                padding-top: 10px;
                width : 100%;
                padding-left: 0px;
                b{
                    font-size: 15px;
                }
                label{
                    font-size: 12px;
                }
            }
            .pric{
                width : 100%;
                flex-direction: row-reverse;
                label{
                    margin-bottom: 5px;
                }
            }
        }
    }
`

export const CartL = styled.div`
/* border : 1px solid green; */
    margin : 20px auto;
    width : 80vw;
    padding : 10px;
`