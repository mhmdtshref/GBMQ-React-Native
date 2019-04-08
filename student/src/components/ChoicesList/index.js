import React, { Component } from "react";
import Choice from "../Choice";
import { StyledChoicesList } from "./index.style";

class ChoicesList extends Component {

    constructor(props){
        super(props);
    }

    renderChoices = () => (this.props.choices).map((choice) => {
            return <Choice text={choice.text} choiceId={choice.id} name="questionChoices" onCheck={() => { this.props.onCheck(choice.id)}} />
        });

    render() {
        return <StyledChoicesList>{this.renderChoices()}</StyledChoicesList>;
    }
}
export default ChoicesList;
