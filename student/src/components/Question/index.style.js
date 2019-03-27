import styled from "styled-components";
import ChoicesList from "../ChoicesList";

export const StyledText = styled.p`
    margin: auto 8vw;
    text-align: center;
    font-size: 6vw;
    font-weight: 600;
    color: #FEFFFF;
    font-family: 'Roboto', sans-serif;
    @media (min-width: 700px) {
    font-size: 30px;
  }
`;
export const StyledChoicesList = styled(ChoicesList)`

`;

export const StyledQuestion = styled.div`
    background-image: linear-gradient(rgba(255, 255, 255, 0.35), rgb(98, 86, 234));
    background-color: rgb(98, 86, 234);
    height: 100vh;
    max-height: 100vh;
`;

export const StyledSign = styled.div`
    width: 40vw;
    margin: -4px 30vw 4vw 30vw;
    color: #FEFFFF;
    position: relative;
    text-align: center;
`;

export const StyledSignImg = styled.img`
    width: 100%;
`;

export const StyledSignText = styled.div`
    font-family: 'Roboto', sans-serif;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #FEFFFF;
    font-weight: 700;
`;

export const StyledButton = styled.button`
    background: #38BEFD;
    border-radius: 20px;
    width:40vw;
    margin-right: 10vw;
    margin-left: 50vw;
    font-weight: 900;
    height:35px;
    color:white;
    border:none;
    margin-top:5px;
`;
