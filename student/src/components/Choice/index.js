import React, { Component } from "react";
import {StyledLabel, StyledInput, StyledChoice} from "./index.style";

class Choice extends Component {

    constructor(props){
        super(props);
    }

  render() {
        return (
            <React.Fragment>
                <StyledChoice onClick={()=> {
                      this.props.onCheck()
                    }
                }>
                    <StyledInput type="radio" value={this.props.id} checked= {this.props.checked} name={this.props.name} />
                    <StyledLabel>{this.props.text}</StyledLabel>
                </StyledChoice>
            </React.Fragment>
        );
    }
}
export default Choice;
