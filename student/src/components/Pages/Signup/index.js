import React, { Component } from "react";
// import {StyledSignup} from "./index.style";
import Form from "../../Form/index";

class Signup extends Component {

    constructor(props){
        super(props);
    }
    render() {
      const GenderOptions = [
            {label: "Male", value:"Male"},
            {label: "Female", value:"Female"}
              ];
      const EnglishOptions = [
            {label: "Yes", value:"Yes"},
            {label: "No", value:"No"}
              ];
      const ageOptions = [
            {label: "Choose age range", value:"Choose age range"},
            {label: "14", value:"14"},
            {label: "15", value:"15"},
            {label: "16", value:"16"},
            {label: "17", value:"17"},
            {label: "18", value:"18"},
              ];
      const fields = [
            { type: "text", name:"username", placeholder: "Enter username"},
            { type: "text", name:"password", placeholder: "Enter password"},
            { label:"What is your gender ?", type:"radio", options: GenderOptions},
            { label:'Is English your first or main language ?', type:"radio", options: EnglishOptions},
            { type: 'select', component: 'select', name: 'ageranges', options: ageOptions},
            { type: 'text', name:'postalcode', placeholder: 'Postal Code'},
              ]
        return (
          <React.Fragment >
          <Form fields = {fields} />
          </React.Fragment>
        )
    }
}
export default Signup;
