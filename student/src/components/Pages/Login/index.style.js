import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h1`
  font-size: 27px;
  text-align:center;
  font-family: "Black Han Sans", sans-serif;
  color: #2d55cf;
  padding-top: 10vh;
  position: relative;
`;

export const Title1 = styled.h1`
  font-size: 40px;
  font-family: "Black Han Sans", sans-serif;
  color: #2d55cf;
  text-align: center;
  position: relative;
`;

export const Title2 = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: normal;
  text-align: left;
  color: #000000;
  text-align: center;
  position: relative;
  z-index: 15;
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

export const StyledDiv = styled.span`
  width: 67vw;
  margin-top: 5vh;
  height: 60vh;
  display: inline;
  margin-left: 28vw;

`;
