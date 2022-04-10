import React, { Component } from "react";
import Integrantes from "../Integrantes/Integrantes";
import './Footer.css';

class Footer extends Component {
    constructor(props){
        super(props)
        this.state = {
            integrantes: [`Catarino`, `Vanderusten`, `Iribarne`],
        }
    }
    render(){
        return(
            <React.Fragment>
                <footer>
                   {this.state.integrantes.map((integrante, idx) => <Integrantes  key={`id` + idx} integrante={integrante}/>)}
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;