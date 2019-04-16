import React, { Component } from "react";
import { StyledDiv, StyledLabel, StyledInput } from "./index.style";

class Field extends Component {

    constructor(props){
        super(props);
    }

    onChangeHandle = ({ target }) => {
        this.props.onChange(target.name, target.value);
    };

    render() {
        const { placeholder, name, type, label } = this.props;
        return <StyledDiv>
            <StyledLabel> {label} </StyledLabel>
            <StyledInput type={type} placeholder={placeholder} name={name} onChange={this.onChangeHandle} />
        </StyledDiv>;
    }
}
export default Field;
