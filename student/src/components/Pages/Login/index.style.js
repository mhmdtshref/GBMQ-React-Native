import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h1`
  font-size: 7vw;
  text-align:center;
  font-family: "Black Han Sans", sans-serif;
  color: #2d55cf;
  padding-top: 10vh;
  position: relative;
`;

export const Title1 = styled.h1`
  font-size: 10vw;
  font-family: "Black Han Sans", sans-serif;
  color: #2d55cf;
  text-align: center;
  position: relative;
`;

export const StyledPage = styled.div`
  margin-right: 5%;
`;

export const StyledBk = styled.img`
  width: 100%;
  position: fixed;
  height: 100%;
`;

export const StyledB = styled.img`
width: 90vw;
margin: 5vh 5vw 0vh 5vw;
position:relative;
`;

export const StyledSpan = styled.span`
  position: relative;
  margin-left: 5vw;
`;
export const StyledLink = styled(Link)`
  position: relative;
  z-index: 15;
  color: #2d55cf;
  margin-left: 30%;
  margin-right: 6%;
  margin-left: 1%;
`;

export const StyledCenteredDiv = styled.div`
  width: 100vw;
  text-align: center;
`;

export const LastStyledCenteredDiv = styled.div`
  width: 100vw;
  text-align: center;
  margin-bottom: 5vh;
`;
