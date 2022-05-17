import styled from "styled-components"


export const Book =styled.div`
    width : 400px;
    height : 600px;
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
    h4{
        text-align: center;
    }
    form {
        padding-top: 10px;
    }
    @media (max-width: 720px) {
        width : 80vw;
    }
`


export const Message = styled.p`
    width : 70%;
    text-align: center;
    margin : 5px auto;
    font-size: 12px;
`


export const Form = styled.form`
    font-size: 14px;
    width : 80%;
    margin : 10px auto;

`
export const Data = styled.div`
    text-align: left;
    margin-bottom: 12px;
    font-size: 12px;
    div{
        display: flex;
        align-items: flex-end;
        gap : 1rem;
        input{
            width : 150px;
        }
    }
    input{
        margin-top : 5px;
        width: 300px;
        height: 28px;
        border-radius: 4px;
        border: 1px solid #E6E6E6;
    }
    textarea{
        width : 300px;
        border-radius: 3px;
        border : 1px solid #E6E6E6;
        height: 50px;
        padding : 10px;
    }
    select{
        width : 300px;
        height: 28px;
        text-align: center;
        border : 1px solid #E6E6E6;
    }
    small{
        color : #737373;
    }
    @media (max-width: 720px) {
        input, textarea, select{
            width : 250px;
        }
    }
`

export const Button = styled.div`
    display: flex;
    border: none;
    gap : 1rem;
    a{
        border-radius: 5px;
        font-size: small;
        text-align: center;
        width: 145px;
         height: 32px;
         display: flex;
         justify-content : center;
         align-items: center;
    }
    a.send{
        color : white;
    background-color:  #34ADDC;
    }
    a.cancel{
        color : #34ADDC;
    background-color:  white;
    border : 1px solid #34ADDC;
    }
    @media (max-width: 720px) {
        a{
            font-size: smaller;
            width : 120px;
        }
    }
`