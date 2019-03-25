import React, { Component } from 'react';
import './App.css';
import MainForm from './components/Form';


class App extends Component {

    onSubmitAction = () => {
        return 0;
    };

    render() {
        const initialValues = { name: '', password: '' };
        const ageOptions = [{ value: '14', label:'14'}, {value: '15', label:'15'}, { value: '16', label:'16'}, {value: '17', label:'17'}, {value: '18', label:'18' }];
        const gender = [{value:'Male',lable:'Male'}, {value:'Female', lable:'Female'}];
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
            },     {
                name: "age",
                component: "select",
                type: "select",
                placeholder: "Age Range",
                options: ageOptions,
            },{
                label:"What is your gender ?",
                name:"radioGroup",
                component:"RadioButton",
                type:"radio",
                options:gender,
            },
        ];
        return (
            <div className="App">
                <MainForm fields={fields} action={this.onSubmitAction} operationName="Login" initialValues={initialValues} />
            </div>
        );
    }
}

export default App;
