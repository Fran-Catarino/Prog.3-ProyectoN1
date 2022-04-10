import React, { Component } from "react";
import './Header.css';

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }
    render(){
        return(
            <header>
                <h2 id="logo">MIRA</h2>
                <section>
                    <i className="fas fa-th estructura"></i>
                    <i className="fas fa-align-justify estructura"></i>
                    <div id="buscador">
                        <form onSubmit={(evento)=>this.evitarDefault(evento)}>
                            <input onChange={(evento)=>this.obtenerDatos(evento)} type="text" name="search" value={this.state.value} placeholder="Search"/>
                            <button type="submit"><i class="fas fa-share"/></button>
                        </form>
                    </div>
                </section>
            </header>
        )
    }
}

export default Header;