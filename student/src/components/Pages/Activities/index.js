import React, { Component } from "react";
import axios from "axios";

import { ActivitiesGroup, ActivityButton, NextActivityButton } from "./index.style"
class Activities extends Component {

    constructor(props){
        super(props);
        this.state = {
            days:[],
            originalDaysNumber: 0,
            renderedDays: '',
        };
    }


    setDaysAndNumber = ({ data }) => new Promise((resolve) => {
        const { activities, fullCount } = data.data;
        this.setState({ days: activities, originalDaysNumber: fullCount }, () => {
            resolve({ days: this.state.days, originalDaysNumber: this.state.originalDaysNumber });
        });
    });

    renderNextDays = (studentDaysNumber, originalDaysNumber) => {
        if(originalDaysNumber > studentDaysNumber){
            const nextDays = [];
            for(let i = studentDaysNumber+1; i <= originalDaysNumber; i++){
                nextDays.push(<NextActivityButton>Day: {i}</NextActivityButton>);
            }
            return nextDays;
        }
    };

    renderDaysComponents = ({ days, originalDaysNumber }) => {
        const renderedDays = this.state.days.sort((dayA, dayB) => dayA.order > dayB.order).map((day) => {
            return <ActivityButton onClick={() => { window.location = day.link }}>{ day.key }</ActivityButton>
        });
        if(renderedDays){
            this.setState({ renderedDays: renderedDays.concat(this.renderNextDays(days.length, originalDaysNumber)) });
        }
    };

    componentDidMount(){
        axios.get('/getActivities')
            .then(this.setDaysAndNumber)
            .then(this.renderDaysComponents)
            .catch((err) => { alert(`Error happen: ${err.message}`) });
    }


  render() {
    return  (
            <ActivitiesGroup>
                {this.state.renderedDays}
            </ActivitiesGroup>
    );
  }
}
export default Activities;
