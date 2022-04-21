import React, { Component } from "react";
import Pelicula from "../Pelicula/Pelicula";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import './Main.css';


class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
            peliculasBKP: [],
            vista: 'Row', 
            nextPage: 1
            
        }
    }
    componentDidMount(){
        {/* <!-- Por página otorga 20 películas --> */}
        const apiKey= "11f88aad97603b2da806d195dbb8daed";
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-US&page=1`)
        .then(response => response.json())
        .then(data => this.setState(
            {
                peliculas: data.results,
                peliculasBKP: data.results,
                
            }
        ))
        .catch( error => console.log(error))
    }
    cambiarVista(vista){
        this.setState({
            vista : vista
        })
           
    }
    masPeliculas(){
        const apiKey="11f88aad97603b2da806d195dbb8daed";
       const nextPage= this.state.nextPage+1
        
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-US&page=${nextPage}`)
        .then(response => response.json())
        .then(data => this.setState({
            peliculas: this.state.peliculas.concat(data.results),
            nextPage: this.state.nextPage+1,
        }
        ))
        .catch(error => console.log(error))
    }
    
// BORRAR TARJETA DE PELI 

    borrarTarjeta(id){
        let peliculasFiltradas = this.state.peliculas.filter( Pelicula => Pelicula.id !== id )

        this.setState({
            peliculas: peliculasFiltradas
        })
    }
// FILTRO
    filtrarPeliculas(texto){
        let peliculasFiltradas = this.state.peliculasBKP.filter( Pelicula => Pelicula.title.toLowerCase().includes(texto.toLowerCase()))
        this.setState({
            peliculas: peliculasFiltradas
        })
    }
    render(){
        console.log(this.state.peliculas)
        return(
            <div id="general">
                { this.state.peliculasBKP.length === 0 ?
                    <React.Fragment>
                        <div id="loader">
                            <img src="./assets/images/loader.gif" id="loader"></img>
                        </div>
                    </React.Fragment>
                    : this.state.peliculas.length === 0 ?
                    <div id="loader">
                        <iframe src="https://giphy.com/embed/zHDMgMM4O3zc4" width="480" height="401" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                    </div>
                    :
                    <React.Fragment>
                        <Header  cambiarVista={(vista) => this.cambiarVista(vista)} filtrarPeliculas={(texto) => this.filtrarPeliculas(texto)} />
                       
                        <main>
                            <section id={`peliculas${this.state.vista}`}> {/* <!-- ID peliculasRow o peliculasColumn --> */}
                                {this.state.peliculas.map((pelicula, idx) => <Pelicula key={"id" + idx} data={pelicula} borrarTarjeta={(id) => this.borrarTarjeta(id)} vista={this.state.vista}/>)}
                            </section>
                            <button type="button" id="masPeliculas" onClick={() => this.masPeliculas()}>Más películas</button>
                        </main>
                        <Footer/>
                    </React.Fragment>
                   
                }
            
            </div>
        )
    }

   
}

export default Main;