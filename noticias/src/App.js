import React, {Component,Fragment} from 'react';
import Header from './Componentes/Header';
import ListaNoticias from './Componentes/ListaNoticias';
import Formulario from './Componentes/Formulario';

class App extends Component {
  state = {
    noticias: []
    }

   componentWillMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria ='general',pais ='ve') => {
    const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=c2d3d4d9163345a09bf348326e1d0082`

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias : noticias.articles
    });
  }

  render() { 
    return ( 
      <Fragment>
        <Header
          titulo = 'Noticias'
        />

        <Formulario
        consultarNoticias ={this.consultarNoticias}
        />

        <div className="container white contenedor-noticias">
          <ListaNoticias
            noticias = {this.state.noticias}
          />
        </div>

      </Fragment>
     );
  }
}
 
export default App;
