import React, { Component } from "react";

class Pelicula extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return(
            <article>
                <main>
                    {/* <!-- Boton para eliminar --> */}
                    <button>Eliminar</button>
                    <img src={`https://image.tmdb.org/t/p/w342/${this.props.data.poster_path}`} alt={this.props.data.title}/>
                    {/* <!-- Título --> */}
                    <h3>{this.props.data.title}</h3>
                    {/* <!-- Descripción --> */}
                    <p>{this.props.data.overview}</p>
                    {/* <!-- Datos "ver más" --> */}
                    <section>
                        <p>Idioma original: {this.props.data.original_language}</p>
                        <p>Valoración: {this.props.data.vote_average}</p>
                        <p>Estreno: {this.props.data.release_date}</p>
                    </section>
                    <a href="">Ver más</a>
                </main>
            </article>
        )
    }
}

export default Pelicula;