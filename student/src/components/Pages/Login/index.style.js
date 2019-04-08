import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h1`
  font-size: 30px;
  font-family: "Black Han Sans", sans-serif;
  color: #2d55cf;
  text-align: center;
  padding-top: 10vh;
  position: relative;
  z-index: 15;
`;

export const Title1 = styled.h1`
  font-size: 40px;
  font-family: "Black Han Sans", sans-serif;
  color: #2d55cf;
  text-align: center;
  position: relative;
  z-index: 15;
  margin-bottom: 85%;
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
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  background-color: #4bc0d8;
  height: 100vh;
  padding: 0;
`;

export const StyledSpan = styled.span`
  position: relative;
  z-index: 15;
  margin-left: 30%;
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
  width: 50%;
  margin-top: 5%;
  height: 60px;
  display: inline;
  margin-top: 5px;
`;
