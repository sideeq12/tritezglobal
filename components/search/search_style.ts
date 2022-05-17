import styled from "styled-components";


export const Search_style = styled.div`
    width : 90vw;
    margin : 30px auto 50px;
    height: 60px;
    border-top: 1px solid #C2C9D1;
    border-bottom: 1px solid #C2C9D1;
    border-top-left-radius: 10px;
    color : #C2C9D1;
    display: flex;

    border-radius: 8px;
    div{
        width : 20%;
        border-right: 1px solid #C2C9D1;
        border-left: 1px solid #C2C9D1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        

        select{
            background-color: white;
            border : none;
        }
    }
    .category{
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    .search{
        width : 60%;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        input{
            height: 100%;
            padding : 0px 20px;
            width : 90%;
            border : none;
        }
        .icons{
            width: 10%;
            border: none;
            margin-right: 20px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        svg:hover{
                    cursor: pointer;
                }
            span{
                height: 20px;
                padding-left: 10px;
                border-left : 1px solid #C2C9D1;
                margin-left: 10px;
                svg{
                    color :#34ADDC;
                }
                
            }
        }
    }

    @media (max-width : 720px) {
        height: 40px;
        width : 95vw;
    border-top-left-radius: 5px;
    .category{
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    div{
        width : 30%;
    }
    div select{
        width : 100px;
        font-size: x-small;
    }

    .search{
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    }
`