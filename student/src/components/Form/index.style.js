import styled from "styled-components";
import { Form, Field } from "formik";

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10vh;
  margin-left: 50px;
  width: 70%;
  position: relative;
  z-index: 15;
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
  height: 35px;
  left: 56px;
  top: 417px;
  justify-content: center;
  border-radius: 50px;
  border-color: #08a3c3;
  background: #ffffff;
  border: 0.5px solid #909da4;
  box-sizing: border-box;
  border-radius: 25px;
  padding-left: 4vh;
  ::placeholder {
    padding-left: 27px;
  }
`;

export const StyledSuccessMessage = styled.p`
  font-size: 1.1vw;
  font-weight: bold;
  color: #4bb543;
`;

export const StyledFailMessage = styled.p`
  font-size: 1.1vw;
  font-weight: bold;
  color: red;
`;

export const StyledRadioLabel = styled.label`
    color: #000000;
    font-weight: 600;
    vertical-align: super;
    font-family: 'Roboto', sans-serif;
    margin-left: 2vw;
`;

export const StyledRadioInput = styled.input`
    width: 6vw;
    height: 6vw;
`;

export const StyledRadioChoice = styled.div`
    margin: 1vh 0px;
    display: inline;
`;



export const StyledMessage = styled.div``;
