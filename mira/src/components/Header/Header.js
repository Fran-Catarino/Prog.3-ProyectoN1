import React, { Component } from "react";
import './Header.css';

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }

        //FUNCIONES DE EVITAR DEFAULT Y OBTENER DATOS
        evitarDefault(evento){
            evento.preventDefault()
        }
    
        obtenerDatos(evento){
            this.setState({
                value: evento.target.value,
            }, ()=>this.props.filtrarPeliculas(this.state.value))
            
        }
    

    render(){
        return(
            <header>
                <h2 id="logo">MIRA</h2>
                <section>
                    <i className="fas fa-th estructura" onClick={()=>this.props.cambiarVista('Row')}></i>
                    <i className="fas fa-align-justify estructura" onClick={()=>this.props.cambiarVista('Column')}></i>
                    <div id="buscador">
                        <form onSubmit={(event)=>this.evitarDefault(event)}>
                            <input onChange={(event)=>this.obtenerDatos(event)} type="text" name="search" value={this.state.value} placeholder="Search"/>
                            <button type="submit"><i className="fas fa-search"/></button>
                        </form>
                    </div>
                </section>
            </header>
        )
    }
}

export default Header;