import styled from "styled-components";
import { Form, Field } from "formik";

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  align-items: center;
  flex-wrap: wrap;
  margin: 10vh 15vw 0vh 15vw
  width: 70%;
  position: relative;
`;

export const StyledLabel = styled.label`
  width: 100%;
  margin-bottom: 15px;
  font-size: 4vw;
  font-family: 'Roboto', sans-serif;
`;

export const StyledField = styled(Field)`
  border: 1px solid #ccc;
  background-color: #fff;
  width: 100%;
  height: 4vh;
  left: 56px;
  top: 417px;
  justify-content: center;
  border-radius: 50px;
  border-color: #08a3c3;
  background: #ffffff;
  border: 0.5px solid #909da4;
  box-sizing: border-box;
  border-radius: 25px;
  padding-left: 7%;
  height: 4vh;
  font-size: 2vh;
`;

export const StyledRadioLabel = styled.label`
    color: #000000;
    font-weight: 600;
    vertical-align: super;
    font-family: 'Roboto', sans-serif;
    font-size: 3vw;
    margin-left: 2vw;
    @media (max-width: 700){
        font-size: 14px;
    }
`;

export const StyledRadioInput = styled.input`
    width: 5vw;
    height: 5vw;
    max-width: 30px;
    max-height: 30px;
`;

export const StyledRadioChoice = styled.div`
    margin: 2vh 3vw;
    display: inline;
`;

export const StyledTitle = styled.p`
  width: 100%;
  margin: 2vh 3vw;
  font-size: 4vw;
  font-family: 'Roboto', sans-serif;
`;

export const StyledSelectLabel = styled.p`
    margin-top: 1vh;
    margin-bottom: 0.8vh;
    margin-left: 3vw;
`;
