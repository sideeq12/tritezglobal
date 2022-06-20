import styled from "styled-components";

interface props {
    show : boolean,
    close : boolean
}

export const Nav = styled.div`
    width : 100vw;
    padding : 20px 5vw 50px;
    font-family: 'Montserrat';
    margin: 0px auto;
    margin-bottom: 20px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    background: #FFFFFF;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

        .burger{
            display: none;
        }
@media (max-width: 720px) {
    padding : 20px 0px;
    .burger{
            display: block;
            margin-left: 5vw;
            z-index: 4;

            svg{
                color : #34ADDC;
            }
        }
}

`

export const Logo = styled.img`
    height: 30px;
    @media (max-width: 720px) {
        margin : 0px 10% 0px 25%;
    }
`
export const List = styled.div<props>`
    display: flex;
    div{
        label{
        display: ${props => props.show ? "none" : "block"};
        transition: .3s;
    }
    svg{
        height: 12px;
        display: ${props => props.show ? "none" : "block"};
    }
    label:hover{
        color : #34ADDC;
        cursor: pointer;
    }
    ul{
        margin-top: -1px;
        display: ${props => props.show ? "block" : "none"};
        transition: display 2s linear 1s;
        background: #FFFFFF;
        box-shadow: 0px 16.3926px 36.8834px rgba(115, 115, 115, 0.2);
        border-radius: 5px;
        padding: 15px;
    }
    }
    @media (max-width : 720px) {
        position: fixed;
        height: 90vh;
        width: 100vw;
        margin-left:  ${props => props.close ? "-100%" : "0px"};
        transition : .5s;
        flex-direction: column;
        padding : 15vh 10vw;
        color : white;
        background-color: #34ADDC;
        backdrop-filter: blur(5px);
        top : 0px;
        z-index: 3;
        gap : 1rem;
        

        div{ 
            width: 50%;
            font-size: 20px;
            margin-left: 20vw;
            a:hover{
            color : white;
            transform: scale(1.2);
        }
            label{
                display:block;
            }
            label:hover{
                color : white;
            }
            ul{
                position : absolute;
                left: 150px ;
                background-color: #34ADDC;
                color : white;
                a:hover{
            color : white;
            transform: scale(1.2);
        }
            }
        }
    }
`
export const Lists = styled.div`
    width : fit-content;
    padding : 10px;
    span{
        display: flex;
        align-items: center;
    }
    ul li{
        list-style: none;
        margin-bottom: 5px;
    }
    &:hover{
        cursor: pointer;
    }
    a:hover{
        color : #34ADDC;
        cursor: pointer;
    }
`
export const Err = styled.p`
    color : red;
    font-size: small;
    border : none;
    margin : 0px;
`
export const Name = styled.span`
    font-size: small;
    margin : 0px 2px;
    width : fit-content;
    /* border : 1px solid blue; */
`




// ------------------------



interface Props {
    active : boolean, 
}
interface bprops{
    showsign : boolean
}
export const Backg = styled.div<bprops>`
display: ${props => props.showsign ? "block" : "none"};
width : 100vw;
height: 100vh;
position: absolute;
background-color: rgba(0, 0, 0, 0.77);
z-index: 3;
.closesign{
    position: absolute;
    top : 75px;
    left : 59.5vw;
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
        left : 92vw;
        top : 80px;
        svg{
            height: 20px;
            width : 20px;
        }
    }
}
`
export const Sign_up =styled.div<Props>`

width : 400px;
height : 527px;
margin : 20px auto;
position: relative;
overflow: hidden;
box-shadow: 0px 16px 36px rgba(115, 115, 115, 0.2);
border-radius: 15px;
font-family: 'Open Sans';
position: absolute;
background-color: white;
left : 30vw;
top : 70px;
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
    width : 90vw;
left : 5vw;
top : 70px;


    span {
        label{
        font-size: 10px;
        padding : 3px 40px;
    }
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
font-size: 15px;

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

export const Button = styled.div`
color : white;
background-color:  #34ADDC;
border-radius: 5px;
text-align: center;
width: 300px;
height: 32px;
border: none;
display: flex;
align-items: center;
justify-content: center;
&:hover{
    cursor: pointer;
}

@media (max-width : 720px) {
    width : 250px
}
`