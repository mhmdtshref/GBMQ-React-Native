import React, { Component } from "react";
import { Formik } from "formik";
import Button from "../Button";

import {
  StyledForm,
  StyledField,
  StyledLabel,
  StyledRadioLabel,
  StyledRadioInput,
  StyledRadioChoice,
  StyledTitle
} from "./index.style";

class MainForm extends Component {
  constructor() {
    super();
    this.state = {
      radios: {},
    };
  }

  getSelectOptions(options) {
    return options.map(o => {
      return <option value={o.value}> {o.label}</option>;
    });
  }

  onRadioClick = (name, value) => {
    this.setState((prevState) => {
      return { radios: { ...prevState.radios, [name]: value} };
    });
  };

  generateRadioOptions(options, name) {
    return options.map(o => {
      return (
          <StyledRadioChoice onClick={() => { this.onRadioClick(name, o.value); }}>
              <StyledRadioInput type="radio" value={o.value} name={name} checked={this.props.initialValues[name] === o.value} />
              <StyledRadioLabel>{o.label}</StyledRadioLabel>
          </StyledRadioChoice>
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
        case "password":
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
                <StyledTitle>{f.text}</StyledTitle>
              {this.generateRadioOptions(f.options, f.name)}
            </StyledLabel>
          );
      }
    });
    return renderedFields;
  };

  onFormSubmit = (values) => {
    const fullValues = { ...this.props.initialValues, ...values, ...this.state.radios };
    this.props
      .action(fullValues)
      .catch(err => {
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
          <Button value={this.props.operationName} />
        </StyledForm>
      </Formik>
    );
  }
}

export default MainForm;
