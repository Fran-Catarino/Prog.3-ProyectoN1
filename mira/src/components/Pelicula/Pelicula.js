import React, { Component } from "react";
import './Pelicula.css';

class Pelicula extends Component {
    constructor(props){
        super(props)
        this.state = {
            textButton: "ver más",
            viewMore: false,
        }
    }
    verMas(){
        if(this.state.viewMore === false){
            this.setState({
                viewMore:true,
                textButton: 'ver menos'
            })
        } else {
            this.setState({
                viewMore: false,
                textButton:'ver más'
            })
        }
    }
    render(){
        return(
            <article className={this.props.vista === 'Row' ? '' : 'column'}> {/* <!-- sumar column al className para formato de columna --> */}
                {   
                    <React.Fragment>   
                        <div className="imagen">
                            {/* <!-- Boton para eliminar --> */}
                            <button onClick={()=> this.props.borrarTarjeta(this.props.data.id)}><p className="fas fa-trash-alt"></p></button>
                            <img src={`https://image.tmdb.org/t/p/w342/${this.props.data.poster_path}`} alt={this.props.data.title}/>
                        </div>
                        <div className="informacion">
                            {/* <!-- Título --> */}
                            <h3>{this.props.data.title}</h3>
                            {/* <!-- Descripción --> */}
                            <p className={this.props.vista === 'Row' ? 'descripcion' : 'descripcion column'}>{this.props.data.overview}</p> {/* <!-- sumar a className column para formato columna --> */}
                            {/* <!-- Datos "ver más" --> */}
                            <section id={this.state.viewMore === false ? 'oculto' : 'visible'}>
                                <p>Idioma original: {this.props.data.original_language.toUpperCase()}</p>
                                <p>Valoración: {this.props.data.vote_average}</p>
                                <p>Estreno: {this.props.data.release_date}</p>
                            </section>
                            <p onClick={()=>this.verMas()} id="textButton">{this.state.textButton}</p>
                        </div>
                    </React.Fragment>
                }
            </article>
        )
    }

    
}

export default Pelicula;