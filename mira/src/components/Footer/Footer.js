import React, { Component } from "react";
import Integrantes from "../Integrantes/Integrantes";

class Footer extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return(
            <footer>
                <ul>
                    {/* <!-- Lista de integrantes --> */}
                    <Integrantes/>
                </ul>
            </footer>
        )
    }
}

export default Footer;