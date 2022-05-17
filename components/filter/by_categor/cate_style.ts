import styled from "styled-components";


export const Cate = styled.div`
    margin : 20px auto;
    height: 200px;
    width : 200px;
    background: #FFFFFF;
    box-shadow: 0px 16.3926px 36.8834px rgba(115, 115, 115, 0.2);
    border-radius: 5px;
    font-family: 'Open Sans';
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .container{
        margin: 10px;
        width : 90%;
        gap : 0.5rem;
        display : flex ;
        flex-direction: column;
        
        label{
            display: flex;
            justify-content: space-between;
            font-size: small;

            input[type="radio"]{
                color : #34ADDC;
                background-color: #34ADDC;
            }
        }
    }
`