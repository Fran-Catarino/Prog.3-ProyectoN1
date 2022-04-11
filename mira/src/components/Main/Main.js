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
            nextPage:1
            
        }
    }
    componentDidMount(){
        {/* <!-- Por página otorga 20 películas --> */}
        const apiKey= "11f88aad97603b2da806d195dbb8daed";
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key${apiKey}&language=es-US&page=1`)
        .then(response => response.json())
        .then(data => this.setState(
            {
                peliculas: data.results,
                
            }
        ))
        .catch( error => console.log(error))
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
    render(){
        console.log(this.state.peliculas)
        console.log(this.state.peliculas[0])
        return(
            <div id="general">
                { this.state.peliculas.length === 0 ?
                    <React.Fragment>
                        <div id="loader">
                            <img src="./assets/images/loader.gif" id="loader"></img>
                        </div>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <Header/>
                        <main>
                            <section id="peliculasRow"> {/* <!-- ID peliculasRow o peliculasColumn --> */}
                                {this.state.peliculas.map( (pelicula, idx) => <Pelicula key={`id` + idx} data={pelicula}/>)}
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