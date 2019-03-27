import styled from "styled-components";

export const StyledDiv = styled.div`
  text-align: center;
  position: relative;
  z-index: 15;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: normal;
  text-align: center;
  color: #303030;
`;

export const Title1 = styled.h1`
  font-size: 30px;
  font-family: "Black Han Sans", sans-serif;
  color: #2d55cf;
  text-align: center;
  padding-top: 10vh;
  margin-top: -8vh;
`;

export const Title2 = styled.h1`
  font-size: 40px;
  font-family: "Black Han Sans", sans-serif;
  color: #2d55cf;
`;

export const StyledPage = styled.div`
  margin-right: 5%;
`;

export const StyledBk = styled.img`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  background-color: #4bc0d8;
  height: 100vh;
  padding: 0;
`;
export const StyledButton = styled.button`
  background: #38befd;
  border-radius: 20px;
  width: 45vw;
  height: 35px;
  color: white;
  border: none;
  margin-top: 80vh;
  margin-left: 27.5vw;
  margin-right: 27.5vw;
  position: relative;
  z-index: 15;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;

export const StyledDiv1 = styled.div`
  width: 60vw;
  height: 10vh;
  margin-left: 15vw;
  margin-right: 35vw;
  margin-bottom: 2vh;
  justify-content: center;
  position: relative;
  z-index: 15;
  margin-top: -20vh;
  font-family: Roboto;
  font-style: normal;
  font-size: 4vw;
  line-height: normal;
  text-align: left;
  color: #303030;

  span {
    font-weight: bold;
  }
`;
