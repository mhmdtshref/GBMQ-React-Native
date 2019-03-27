import React, { Component } from "react";
import {StyledPage, StyledBk, StyledTitle } from "./index.style";
import bg from './signup-bg.png';
import Form from "../../Form/index";

class Signup extends Component {

    constructor(props){
        super(props);
    }

    onSubmitAction = (values) => {
      return new Promise((resolve, reject) => {
          if (values){
              resolve(values);
          } else {
              reject(new Error('No values found!'));
          }
      });
    };

    render() {

      const initialValues = { username: "", password: "", postalCode: "", gender: 1, english: 1 };
      const GenderOptions = [
            {label: "Male", value: 1},
            {label: "Female", value: 0}
              ];
      const EnglishOptions = [
            {label: "Yes", value: 1},
            {label: "No", value: 0}
              ];
      const ageOptions = [
            {label:"Choose age range", value:"Choose age range"},
            {label: "14", value:"14"},
            {label: "15", value:"15"},
            {label: "16", value:"16"},
            {label: "17", value:"17"},
            {label: "18", value:"18"},
              ];
      const fields = [
            { type: "text", name:"username", placeholder: "Enter username"},
            { type: "password", name:"password", placeholder: "Enter password"},
            { type:"radio", name: "gender", text:"What is your gender ?", options: GenderOptions},
            { type:"radio", name: "english", text:"Is English your first language ?", options: EnglishOptions},
            { type: "select", name: "ageRanges", component: "select", options: ageOptions},
            { type: "text", name:"postalCode", placeholder: "Postal Code"},
              ];
        return (
          <React.Fragment >
          <StyledPage>
            <StyledBk src={bg}/>
              <StyledTitle> Enter your information </StyledTitle>
              <Form fields = {fields} action={this.onSubmitAction} operationName="Signup" initialValues = {initialValues}/>
          </StyledPage>
          </React.Fragment>
        )
    }
}
export default Signup;
