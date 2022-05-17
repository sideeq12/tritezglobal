import styled from "styled-components"

interface res{
    imgl : string
}


export const Cart_v = styled.div<res>`
    width: 30vw;
    margin : 10px auto;
    height: 150px;
    display: flex;
    background-color:  #F9F9F9;
    padding-top: 10px 0px;
    padding-top: 10px;
    border-top: 1px solid #C9C9C9;;

    .imagelayout{
        background-image: url(${props => props.imgl});
        height: 100%;
        width : 30%;
        background-position: center;
        background-size: cover;
    }
    .details{
        padding : 30px 0px 10px 40px;

        b{
            font-family: "Open sans";
            color : #343434;
        }
        p{
            color: #5A5A5B;
            opacity: 0.7;

            label{
                color : #34ADDC;
                margin-right: 20px;
            }
        }
        div{
            color : #34ADDC;
                font-weight: bold;
                font-size: 18px;
            label{
                color : #5A5A5B;
                font-size: 15px;
                margin-left: 10px;
                font-weight: normal;
            }
        }
    }
    @media (max-width: 720px) {
        width : 95vw;
        margin : 10px auto;
        padding : 5px 0px;
        height: 120px;
        font-size: small;

        .details{
            div{
            font-weight: normal;
            font-size: 15px;
        }
        }
    }
`
export const View_list = styled.div`
    height: fit-content;
    margin : 10px auto;
    width: fit-content;

    @media (max-width: 720px) {
        margin-left: 10px;
    }
`