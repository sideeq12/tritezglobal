import styled from "styled-components"

    interface Props {
        active : boolean
    };

export const Sign_up =styled.div<Props>`
    width : 400px;
    height : 527px;
    margin : 20px auto;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 16px 36px rgba(115, 115, 115, 0.2);
    border-radius: 15px;
    font-family: 'Open Sans';
    .cover{
        display: flex;
    }
    .logo{
        position: absolute;
        top: 50px;
        left: 47%;
        height: 30px;
    }
    span{
        border: 1px solid #34ADDC;
        border-radius: 3px;
        display: flex;
        flex-direction: row;
        width : fit-content;
        margin : 20px auto 10px;

        label.signup{
            color : ${props => props.active ? "#fff" : "#34ADDC"} ;
            background-color: ${props => props.active ? "#34ADDC" : ""} ;
        }
        label.signin{
            color : ${props => props.active ? "#34ADDC" : "#fff"} ;
            background-color: ${props => props.active ? "#fff" : "#34ADDC"} ;
        }
    }
    .forget{
        color : #252B42;
        font-size: 12px;
        float: right;
        margin-right: 60px;
    }

    .circle{
        background: rgba(30, 173, 145, 0.56);
        height: 300px;
        margin-top: -230px;
        transform : translateX(225px);
        width: 300px;
        border-radius: 100%;
        opacity: 0.2;
    }
    .sign{
        display: ${props => props.active ? "block" : "none"};
        transition: .3s;
    }
    form {
        padding-top: ${props => props.active ? "25px" : "40px"};
    }

    @media (max-width : 720px) {
        width : 80vw;

        span label{
            font-size: 10px;
            padding : 3px 40px;
        }
        p, div{
            font-size: 10px;
        }
       
       
    }
`

export const Label = styled.label`
    transition: .2s;
    padding : 5px 50px;
    font-size: small;

    &:hover{
        cursor: pointer;
    }
`

export const Message = styled.p`
    width : 60%;
    text-align: center;
    margin : 10px auto;
    font-size: 12px;
`

export const Google_sign = styled.div`
    display: flex;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    border : 1px solid #E6E6E6;
    width: 80%;
    margin : 10px auto;
    padding : 3px 0px;
    font-size: smaller;

    img{
        margin-left: 0px;
        margin-right: 10px;
        height: 15px;
        width : 15px;
    }
    &:hover{
        cursor: pointer;
    }
`
export const Newline = styled.div`
        position: absolute;
        left : 10%;
        width: 80%;
    hr{
        color : #DADADA;
    }
    .or{
        position: relative;
        left: 45%;
        top : -25px;
        font-size: small;
        border-radius: 100%;
        padding : 5px;
        background-color: #fff;
        width : fit-content
    }
`
export const Form = styled.form`
    font-size: 14px;
    width : 80%;
    margin : 10px auto;

`
export const Data = styled.div`
    text-align: left;
    margin-bottom: 15px;
    font-size: 12px;
    
    input{
        margin-top : 5px;
        width: 300px;
        height: 32px;
        border-radius: 4px;
        border: 1px solid #E6E6E6;

        @media (max-width : 720px) {
        width : 250px
    }
    }
    small{
        color : #737373;
    }
`

export const Button = styled.button`
    color : white;
    background-color:  #34ADDC;
    border-radius: 5px;
    text-align: center;
    width: 300px;
    height: 32px;
    border: none;

    @media (max-width : 720px) {
        width : 250px
    }
`