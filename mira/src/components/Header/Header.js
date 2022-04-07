import React, { Component } from "react";

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
                <h1>MIRA</h1>
                <section>
                    <i className="fas fa-th"></i>
                    <i className="fas fa-align-justify"></i>
                    <form onSubmit={(evento)=>this.evitarDefault(evento)}>
                        <input onChange={(evento)=>this.obtenerDatos(evento)} type="text" name="search" value={this.state.value} placeholder="Search"/>
                        <button type="submit"><i>Buscar</i></button>
                    </form>
                </section>
            </header>
        )
    }
}

export default Header;