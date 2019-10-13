import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {
    state = { 
        categoria : 'general',
        pais : 've'
     }

     CambiarCategoria = e => {
        this.setState({
            categoria : e.target.value
        }, () => {
            this.props.consultarNoticias(this.state.categoria,this.state.pais);
        });
        
     }

     CambiarPais = e => {
         this.setState({
             pais : e.target.value
         }, () => {
            this.props.consultarNoticias(this.state.categoria,this.state.pais);
        });
     }

    render() { 
        return ( 
            <div className="buscador row ">
                <div className="col s12 m8 offset-m2">
                    <form  >
                        <div className="input-field col s6 ">
                            <h5>Categoria</h5>
                            <select
                                onChange={this.CambiarCategoria}
                            >
                                <option value ="general">General</option>    
                                <option value ="business">Negocios</option>    
                                <option value ="entertainment">Entretenimiento</option>    
                                <option value ="health">Salud</option>    
                                <option value ="science">Ciencia</option>    
                                <option value ="sports">Deportes</option>    
                                <option value ="technology">Tecnologia  </option>    
                            </select>
                        </div>

                        <div className="input-field col s6">
                        <h5>Pais</h5>
                            <select
                                onChange={this.CambiarPais}
                            >
                                <option value ="ve">Venezuela</option>    
                                <option value ="ar">Argentina</option>    
                                
                            </select>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
Formulario.propTypes = {
    consultarNoticias : PropTypes.func.isRequired
}
 
export default Formulario;