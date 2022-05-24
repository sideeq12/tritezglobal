import styled from "styled-components";

interface bprops{
    showsign : boolean
}
export const Backg = styled.div<bprops>`
display: ${props => props.showsign ? "block" : "none"};
width : 100vw;
height: 100vh;
position: absolute;
/* position: fixed; */
background-color: rgba(0, 0, 0, 0.77);
z-index: 3;
.closesign{
    position: absolute;
    top : 12px;
    left : 64vw;
    z-index: 4;
    &:hover{
        cursor: pointer;
    }
    svg{
        width : 25px;
        height: 25px;
    }
}

@media (max-width: 720px) {
    .closesign{
        left : 87vw;
        top : 10px;
        svg{
            height: 20px;
            width : 20px;
        }
    }
}
`
export const Book =styled.div`
    width : 400px;
    height : 600px;
    margin : 20px auto;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 16px 36px rgba(115, 115, 115, 0.2);
    border-radius: 15px;
    background-color: white;
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

export const Delivery_card = styled.div`
        padding : 20px 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        gap : 1rem;
        height: 300px;
        width : 300px;
        border : 1px solid #D3EDF8;
        border-radius: 5px;
        text-align: center;
        

        img{
            height: 80px;
            width : 80px;
            margin : 0px auto;
        }
        label{
            color : black;
            font-size: 16px;
            font-weight: bold;
        font-family: "Tinos";
        }
        p{
            font-size: 14px;
            color : #5A5A5B;
            font-family: 'Open Sans';
        }

        &:hover{
            transition: .2s;
            border : 1px solid #34ADDC;
            cursor: pointer;
        }

        @media (max-width: 720px) {
            margin-top: 20px;
        }

`

export const Delivery_list = styled.div`
    width : 100vw;
    padding : 0px 10vw;
    margin : 100px auto;
    display: flex;
    flex-wrap: wrap;
    /* border : 1px solid blue; */
    gap : 1rem;
    justify-content: center;
    align-items : center;
    transform: translateY(-100px);
            clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
            opacity: 0;

    @media (max-width : 720px) {
        width : 100vw;
        margin : 20px auto;
    }
`