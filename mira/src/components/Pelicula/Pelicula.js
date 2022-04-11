import React, { Component } from "react";
import './Pelicula.css';

class Pelicula extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return(
            <article className=""> {/* <!-- sumar column al className para formato de columna --> */}
                <div className="imagen">
                    {/* <!-- Boton para eliminar --> */}
                    <button onClick={()=> this.props.borrarTarjeta(this.props.data.id)}><p class="fas fa-trash-alt"></p></button>
                    <img src={`https://image.tmdb.org/t/p/w342/${this.props.data.poster_path}`} alt={this.props.data.title}/>
                </div>
                <div className="informacion">
                    {/* <!-- Título --> */}
                    <h3>{this.props.data.title}</h3>
                    {/* <!-- Descripción --> */}
                    <p className="descripcion">{this.props.data.overview}</p> {/* <!-- sumar a className column para formato columna --> */}
                    {/* <!-- Datos "ver más" --> */}
                    <section id="oculto"> {/* <!-- ID oculto o visible --> */}
                        <p>Idioma original: {this.props.data.original_language.toUpperCase()}</p>
                        <p>Valoración: {this.props.data.vote_average}</p>
                        <p>Estreno: {this.props.data.release_date}</p>
                        <p id="visible">ver menos</p>
                    </section>
                    <p id="visible">ver más</p> {/* <!-- ID oculto o visible --> */}
                </div>
            </article>
        )
    }

    
}

export default Pelicula;