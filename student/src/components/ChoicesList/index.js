import React, { Component } from "react";
import Choice from "../Choice";

class ChoicesList extends Component {

    constructor(props){
        super(props);
    };

    renderChoices = () => (this.props.choices).map((choice) => {
            return <Choice text={choice.text} choiceId={choice.id}/>
        });

    render() {
        return this.renderChoices();
    }
}
export default ChoicesList;
