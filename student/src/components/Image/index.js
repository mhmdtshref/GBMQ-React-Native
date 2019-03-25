import React, { Component } from "react";
import StyledImage from './index.style';

class Image extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return <StyledImage src={this.props.url} />
    }
}


export default Image;
