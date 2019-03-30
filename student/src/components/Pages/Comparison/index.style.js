import styled from "styled-components";

export const BackgroundImage = styled.img`
    width: 100%;
    height: 100%;
`;

export const StyledContent = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height:100vh;
    background-color:#F2F5FA;
`;

export const CongratsImg = styled.img`
    width: 90vw;
    margin: 5vh 5vw 0vh 5vw;
`;
export const StyledHeader = styled.div`
    width: 100vw;
    text-align: center;
    margin-top: -5vh;
`;

export const MessageText = styled.p`
    font-size: 5.5vw;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    margin-bottom: 2vh;
    color: #303030;
`;

export const SmallTitle = styled.p`
    font-size: 8vw;
    font-family: "Black Han Sans", sans-serif;
    color: #2d55cf;
    margin-bottom: 1vh;
`;

export const BigTitle = styled.p`
    font-size: 11vw;
    font-family: "Black Han Sans", sans-serif;
    color: #2d55cf;
`;

export const Results = styled.div`
    width: 88vw;
    margin: 5vh 5vw 0vh 5vw;
`;
export const Column1 = styled.div`
float: left;
width: 30%;
border-right: 1px solid #D7D7D9;
p{
  margin-bottom:2vh;
  text-align:left;
}
`;
export const Column = styled.div`
float: left;
width: 22%;
border-right: 1px solid #D7D7D9;
p{
  margin-bottom:2vh;
  text-align:center;
}
`;

export const Column2= styled.div`
float: right;
width: 22%;

p{
  margin-bottom:2vh;
  text-align:center;
}
`;

export const StyledButton = styled.button`
    background: #38BEFD;
    border-radius: 20px;
    width: 50vw;
    height: 5.5vh;
    color: #FFFFFF;
    border: none;
    margin: 4vh 25vw 2vh 25vw;
    font-weight: 700;
    font-size: 90%;
`;
