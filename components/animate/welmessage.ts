import styled from "styled-components";


export const Welcomessage = styled.div`
    width : 100vw;
    height: 100vh;
    background-image: url("/bg1.jpg");
    background-size: cover;
    position: absolute;
    top : 0px;
    background-position: center;
    .colorC{
        position: absolute;
        z-index: 1;
        width: 100vw;
        height: 100vh;
        background-color: #062735a2;
        top : 0px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items : center;
        flex-direction: column;
    }
    p{
        color : white;
        font-size: 30px;
        z-index: 3;
        width : 40vw;
        text-align: center;
        animation: aime 5s ease-in-out;
        span{
            font-weight: bold;
        }
    }
        @keyframes aime {
            0%{
                margin-right: -80vw;
            } 20%{
                margin-right: -10vw;
            }
            50%{
                margin-right: 0px;
            }
            70%{
                margin-right: 0px;
            }
            90%{
                margin-right: -10vw;;
            }
            100%{
                margin-right: -80vw;
            }
        }
    @media (max-width: 720px) {
        
    }
`