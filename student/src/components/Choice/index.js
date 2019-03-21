import React, { Component } from "react";

class Choice extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <input type="radio" value={this.props.id} />{this.props.text}<br/>
            </React.Fragment>
        );
    }
}
export default Choice;
