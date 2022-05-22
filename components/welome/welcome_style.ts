import styled from "styled-components";


export const Welc = styled.div`
    border: 10px;
    width : 90vw;
    margin: 0px auto;
    height: 90vh;
    padding : 0px 0px 30px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to right, #D3EDF8 ,#e0eaee9a);

    .left{
        width: 45%;
        padding-left: 100px;
        padding-top: 100px;
        height: 100%;

        h2{
            font-family: 'Tinos';
            font-size: 43px;
            word-spacing: 2px;
            transform: translateY(-100px);
            clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
            opacity: 0;
        }
        label{
            font-family: "Send Flowers";
            font-size: 30px;
            font-weight: 400;
            color : #09668A;
            opacity: 0;
            transform: translateY(100px);
            clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
        }
        p{
            margin-bottom: 30px;
            transform: translateY(100px);
            clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
        }
        p, a{
            font-family: 'Montserrat';
        }
        a{
            background: #34ADDC;
            box-shadow: 0px 12px 32px rgba(52, 173, 220, 0.25);
            border-radius: 20px;
            color : white;
            padding : 10px 50px;
            font-family: "Meontserrat";
            transform: translateY(100px);
            clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
            opacity: 0;
        }
    }
    .right{
        height: 100%;
        width : 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        img.welcome{
            height: 100%;
            z-index: 1;
            opacity: 0;
            transform: scale(0.3);
            
        }
        .cust{
            background : #D3EDF8;
            position: absolute;
            left: -100px;
            bottom: 50px;
            transform: scale(0.3);
            transform: translateX(100px);
            opacity: 0;
            img{
                height: 100px;
                width : 200px
            }
        }
        .mode{
            position: absolute;
            top : 50px;
            padding : 20px;
            background-color: rgba(255,255,255, 0.7);
            border-radius: 5px;
            left: -60px;
            transform: scale(0.3);
            transform: translateX(-100px);
            opacity: 0;
            img{
                height: 60px;
                width : 150px
            }
        }
        .circle{
            width: 180px;
            height: 180px;
            border-radius: 100%;
            /* animation: blink infinite  6s; */

        }
        .circle1{
            position: absolute;
            top: 200px;
            left: 50px;
            background-image: linear-gradient(to top right, green, #fff);
        }
        .circle2{
            position: absolute;
            bottom: 10px;
            left: 200px;
            background-color: white;
        }
        .circle3{ 
            position: absolute;
            right: 100px;
            top: 20px;
            background-image: linear-gradient(to bottom left, #34ADDC, #fff);
        }
    }
    @media (max-width: 720px) {
        width : 100vw;
        height: 90vh;
        flex-direction: column-reverse;
        padding : 50px 10px 20px;

        .left, .right{
            width : 80%;
            margin : 0px auto;
        }
        .left{
            padding : 0px;
            label{
                font-size: 15px;
            }
            p{
                font-size: 12px;
            }
            a{
                font-size: small;
                padding: 10px 25px;
                border-radius: 10px;
            }
            h2{
                font-size: 20px;
            }
        }
        .right{
            img.welcome{
                    height: 470px;
            }
            .circle{
            width: 120px;
            height: 120px;
            animation: blink1 infinite  6s;
            border-radius: 100%;
        }
        .circle1{
            top: 160px;
            left: 10px;
        }
        .circle2{
            left: 80px;
            bottom: -10px;
        }
        .circle3{
            right : 70px;
            top : -10px;
        }
        .cust{
            left: -20px;
            background-color: #34ADDC;
            bottom: 80px;
            /* display: n; */
            img{
                height: 60px;
                width : 100px;
            }
        }
        .mode{
            left: -30px;
            top : -10px;
            border-radius: 2px;
            img{
                height: 30px;
                width : 80px;
            }
        }
        }

    }

    @keyframes blink {
        0%{
            width : 120px;
            height: 120px;
        }25%{
            width :160px;
            height: 160px;
        }50%{
            height: 200px;
            width: 200px;
        }75%{
            width: 160px;
            height: 160px;
        }100%{
            width : 120px;
            height: 120px;
        }
    }
    @keyframes blink1 {
        0%{
            width : 40px;
            height: 40px;
        }25%{
            width :80px;
            height: 80px;
        }50%{
            height: 120px;
            width: 120px;
        }75%{
            width: 80px;
            height: 80px;
        }100%{
            width : 40px;
            height: 40px;
        }
    }
`

export const Ganimate = styled.div`

`