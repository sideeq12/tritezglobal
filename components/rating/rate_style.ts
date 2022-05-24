import styled from "styled-components";

interface per{
    // parc : number, 
    stat : boolean
}

export const Rates = styled.div`
    width : 90vw;
    margin : 15px auto;
    height: 300px;
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
    div{
        width : 40%;
    }
    .left .ra{
        font-size: 40px;
        flex-direction: row;
        align-items: flex-end;
        width: fit-content;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 100px;
        label{
            font-size: 30px;
            margin-top: 10px;
        }
    }
    .left p{
    color : #5A5A5B;
    align-self: flex-start;
    margin-top: -2px;
    }
    .merger{
        align-items: flex-start;
        div{
            height: fit-content;
            width : fit-content;
            margin-right: 10px;
        }
        display: flex;
        width : 100%;
    }
    .allstars{
        .all_bars{
            margin : 10px;
        }
        span{
            color : #09668A;
        }
        .cov{
            width : 300px;
            margin-top: 3px;
            height: 10px;
            background-color: #C9C9C9;

            .inn{
                width : 100%;
                height: 100%;
                background-color: #09668A;
            }
        }
    }
    @media (max-width: 720px) {
        flex-direction: column;
        .allstars{
            font-size: small;
            margin-top: -50px;
            .all_bars{
                margin : 5px
            }
            .cov{
                height: 5px;
            }
        }
        .left{
            height: fit-content;
            margin-top: 40px;
            padding : 0px 10px;
            width : 100%;
        }
        .left .ra{
            font-size: 20px;
             label{
                 font-size: 15px;
             }
        }
    }
`

export const All_bars = styled.div<per>`
    color : ${props => props.stat ? " " : "" };
    div .inn{
        display: ${props => props.stat ? "none" : "block"};
    }
`