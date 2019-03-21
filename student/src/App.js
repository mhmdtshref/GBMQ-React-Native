import React, { Component } from 'react';
import './App.css';
import MainForm from './components/Form';

class App extends Component {

onSubmitAction = () => {
  return 0;
}


  render() {
    const initialValues = { name: '', password: '' };
    const fields = [
      {
        type: "text",
        name: "name",
        placeholder: "Name",
      },
      {
         type: "text",
         name: "password",
         placeholder: "Password",
       },



    ];
    return (
      <div className="App">
      <MainForm fields={fields} action={this.submitAction} operationName="Login" initialValues={initialValues} />
      </div>
    );
  }
}

export default App;
