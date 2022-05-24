import styled from "styled-components";



export const Mission_style = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding : 20px;
    margin : 50px auto;
    font-family: "Tinos";
        transform: translateY(100px);
        clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
        opacity: 0;
    
    p{
        width : 60%;
        text-align: center;
        font-family: 'Open Sans';
    }

    @media (max-width : 720px) {
        width : 100vw;
        p{
            width : 90%;
        }
    }
`
