import React, { Component } from "react";
import { Formik } from "formik";
import Button from "../Button";

import {
  StyledForm,
  StyledField,
  StyledLabel,
  StyledMessage,
  StyledSuccessMessage,
  StyledFailMessage
} from "./index.style";

class MainForm extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  getSelectOptions(options) {
    return options.map(o => {
      return <option value={o.value}> {o.label}</option>;
    });
  }
  generateRadioOptions(options) {
    return options.map(o => {
      return (
        <React.Fragment>
          {" "}
          <input type="radio" value={o.value} /> {o.lable}
        </React.Fragment>
      );
    });
  }

  renderFields = () => {
    const renderedFields = this.props.fields.map(f => {
      switch (f.type) {
        case "text":
          return (
            <StyledLabel>
              <StyledField
                type={f.type}
                name={f.name}
                placeholder={f.placeholder}
              />
            </StyledLabel>
          );
        case "select":
          return (
            <StyledLabel>
              <StyledField type="select" component={f.component} name={f.name}>
                {this.getSelectOptions(f.options)}
              </StyledField>
            </StyledLabel>
          );
        case "radio":
          return (
            <StyledLabel>
              {f.label} <br />
              {this.generateRadioOptions(f.options)}
            </StyledLabel>
          );
      }
    });
    return renderedFields;
  };
  onFormSubmit = (values, { resetForm }) => {
    //console.log("Values submitted ::", values);
    const fullValues = { ...this.props.initialValues, ...values };
    this.props
      .action(fullValues)
      .then(successMessage => {
        resetForm(this.props.initialValues);
        this.setState({
          message: <StyledSuccessMessage>{successMessage}</StyledSuccessMessage>
        });
      })
      .catch(err => {
        this.setState({
          message: <StyledFailMessage>Failed</StyledFailMessage>
        });
        alert("Failed:" + err);
      });
  };

  render() {
    return (
      <Formik
        onSubmit={this.onFormSubmit}
        initialValues={this.props.initialValues}
      >
        <StyledForm>
          {this.renderFields()}
          <StyledMessage>{this.state.message}</StyledMessage>
          <Button value={this.props.operationName} />
        </StyledForm>
      </Formik>
    );
  }
}

export default MainForm;
