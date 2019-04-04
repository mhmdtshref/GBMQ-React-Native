import styled from "styled-components";

export const StyledContent = styled.body`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    background-color: #F2F5FA;
    height: 100vh;
`;

export const StyledHome  = styled.div`
`;


export const StyledHeader = styled.div`
    width: 100vw;
    text-align: center;
    margin-top: 5vh;
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

export const MessageText = styled.p`
    font-size: 5.5vw;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2vh;
    margin-top: 4vh;
    color: #303030;
`;

export const StyledImg = styled.img`
  width: 100%;
  position: relative;
  height: 50vh;
`;

export const StyledActivitiesButton = styled.button`
  border-radius: 20px;
  border: none;
  display: block;
  margin-top: 2vh;
  margin-left: auto;
  margin-right: auto;
  background: #4DD842;
  width: 45vw;
  height: 35px;
  text-align: center;
  color: #FFFFFF;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  position: relative;
`;

export const StyledQuizButton = styled.button`
  border-radius: 20px;
  border: none;
  display: block;
  margin-top: 2vh;
  margin-left: auto;
  margin-right: auto;
  background: #38befd;
  width: 45vw;
  height: 35px;
  text-align: center;
  color: #FFFFFF;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  position: relative;
  &:disabled {
    opacity: 0.65;
    background: #6c757d;
    cursor: not-allowed;
}
`;

export const StyledLoading = styled.h1`
    color: #292f33;
    font-weight: 800;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-size: 10vw;
    margin-top: 50%;
`;
