import React, { Component } from "react";
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

    getDays = () => {
        return new Promise((resolve, reject) => {
            const days = [{ order: 1, key: 'Day 1', link: 'https://youtube.com/' }, { order: 2, key: 'Day 2', link: 'https://youtube.com/' }];
            if(days){
                resolve(days);
            } else {
                reject(new Error('No days found!'));
            }
        });
    };

    setDays = (days) => {
        return new Promise((resolve, reject) => {
            this.setState({days}, () => {
                if(days){
                    resolve();
                } else {
                    reject(new Error('Set State Error!'));
                }
            });
        });
    };

    getOriginalDaysNumber = () => {
        return new Promise((resolve, reject) => {
            const num = 5;
            if(num){
                resolve(num);
            } else {
                reject(new Error('No Number found!'));
            }
        });
    };

    setOriginalDaysNumber = (originalDaysNumber) => {
        return new Promise((resolve, reject) => {
            this.setState({ originalDaysNumber }, () => {
                if(originalDaysNumber){
                    resolve();
                } else {
                    reject(new Error('Set State Error!'));
                }
            });
        })
    };

    componentDidMount(){
        this.getDays()
            .then(this.setDays)
            .then(this.getOriginalDaysNumber)
            .then(this.setOriginalDaysNumber)
            .then(() => this.renderDaysComponents(this.state.days, this.state.originalDaysNumber))
            .then(this.setRenderedDaysComponents)
            .catch((error) => {
                alert("Error in the App: " + error.message);
            });
    }

    renderNextDays = (studentDaysNumber, originalDaysNumber) => {
        if(originalDaysNumber > studentDaysNumber){
            const nextDays = [];
            for(let i = studentDaysNumber+1; i <= originalDaysNumber; i++){
                nextDays.push(<NextActivityButton>Day: {i}</NextActivityButton>);
            }
            return nextDays;
        }
    };

    renderDaysComponents = (days, originalDaysNumber) => {
        return new Promise((resolve, reject) => {
            const renderedDays = this.state.days.sort((dayA, dayB) => dayA.order > dayB.order).map((day) => {
                return <ActivityButton onClick={() => { window.location = day.link }}>{ day.key }</ActivityButton>
            });
            if(renderedDays){
                resolve(renderedDays.concat(this.renderNextDays(days.length, originalDaysNumber)));
            } else {
                reject(new Error('Creating days error!'));
            }
        })
    };

    setRenderedDaysComponents = (renderedDaysComponents) => {
        this.setState(
            { renderedDays: renderedDaysComponents },
            () => {
                return new Promise(resolve => resolve())
            }
        );
    };

  render() {
    return  (
            <ActivitiesGroup>
                {this.state.renderedDays}
            </ActivitiesGroup>
    );
  }
}
export default Activities;
