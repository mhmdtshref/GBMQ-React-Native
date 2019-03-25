import styled from "styled-components";
import { Form, Field } from "formik";

export const StyledForm = styled(Form)`
display: flex;
justify-content: center;
align-items: center;
flex-flow: column wrap;
align-items: center;
flex-wrap: wrap;
margin-top:20px;
margin-left:50px;
width: 70%;
`;

export const StyledLabel = styled.label`
  width: 100%;
`;


export const StyledField = styled(Field)`
  border: 1px solid #ccc;
  background-color: #fff;
  width: 100%;
  height: 35px;
  left: 56px;
  top: 417px;
  justify-content:center;
  border-radius: 50px;
  border-color:#08A3C3;
  margin-bottom:10px;
  background: #FFFFFF;
  border: 0.5px solid #909DA4;
  box-sizing: border-box;
  border-radius: 25px;
  ::placeholder {
    padding-left: 27px;
  }
`;

export const StyledSuccessMessage = styled.p`
  font-size: 1.1vw;
  font-weight: bold;
  color: #4BB543;
`;

export const StyledFailMessage = styled.p`
  font-size: 1.1vw;
  font-weight: bold;
  color: red;
`;

export const StyledMessage = styled.div`
`;
