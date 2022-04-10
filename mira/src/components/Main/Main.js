import React, { Component } from "react";
import Pelicula from "../Pelicula/Pelicula";
import Header from "../Header/Header";
import './Main.css';

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculas: []
        }
    }
    componentDidMount(){
        {/* <!-- Por página otorga 20 películas --> */}
        const apiKey= "11f88aad97603b2da806d195dbb8daed";
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-US&page=1`)
        .then(response => response.json())
        .then(data => this.setState(
            {
                peliculas: data.results
            }
        ))
        .catch( error => console.log(error))
    }
    render(){
        console.log(this.state.peliculas)
        console.log(this.state.peliculas[0])
        return(
            <div id="general">
                { this.state.peliculas.length === 0 ?
                <h2>CARGANDO...</h2> :
                <React.Fragment>
                    <Header/>
                    <main>
                        <section id="peliculasRow"> {/* <!-- ID peliculasRow o peliculasColumn --> */}
                            {this.state.peliculas.map( (pelicula, idx) => <Pelicula key={`id` + idx} data={pelicula}/>)}
                        </section>
                        <button type="button" id="masPeliculas">Más películas</button>
                    </main>
                </React.Fragment> 
                }
            </div>
        )
    }
}

export default Main;