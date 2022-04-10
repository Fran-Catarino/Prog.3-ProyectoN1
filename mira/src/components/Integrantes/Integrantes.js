import React, { Component } from "react";
import './Integrantes.css';

class Integrantes extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return(
            <p id="integrantes">{this.props.integrante}</p>
        )
    }
}

export default Integrantes;