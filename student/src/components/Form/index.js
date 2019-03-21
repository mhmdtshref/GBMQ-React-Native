import React, { Component } from "react";
import { Formik } from "formik";
import Button from '../Button';

import {
  StyledForm,
  StyledField,
  StyledLabel,
  StyledMessage,
  StyledSuccessMessage,
  StyledFailMessage,
} from "./index.style";

class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {dateFieldsValues: {}};
  }

  static getSelectOptions(options) {
    return options.map((o) => {
      return <option value={o.value}> {o.label}</option>;
    });
  }

  renderFields = () => {
    const renderedFields = this.props.fields.map((f) => {
      switch (f.type) {
        case 'text':
          return <StyledLabel>{f.label}
            <StyledField
              type={f.type}
              name={f.name}
              placeholder={f.placeholder}
            />
          </StyledLabel>;
      }
    });
    return renderedFields;
  }

  updateDatesState = (name, value) => {
    const newFieldsValues = (this.state.dateFieldsValues);
    newFieldsValues[name] = value;
    this.setState({dateFieldsValues: newFieldsValues});
  }

  onFormSubmit = (values, { resetForm }) => {
    //console.log("Values submitted ::", values);
    const fullValues = { ...this.props.initialValues, ...values };
    (this.props.action({ ...fullValues, ...this.state.dateFieldsValues }))
      .then((successMessage) => {
        resetForm(this.props.initialValues);
        this.setState({ message: <StyledSuccessMessage>{successMessage}</StyledSuccessMessage> });
      })
      .catch((err) => {
        this.setState({ message: <StyledFailMessage>فشل العملية</StyledFailMessage>});
          alert("فشل العملية، السبب: " + err);
      });
  };

  render() {
    return (
      <Formik onSubmit={this.onFormSubmit} initialValues={this.props.initialValues}>
        <StyledForm>
          {this.renderFields()}
          <StyledMessage>{this.state.message}</StyledMessage>
          <Button value="Login"/>
        </StyledForm>
      </Formik>
    );
  }

}

export default MainForm;
