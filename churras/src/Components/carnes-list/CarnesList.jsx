import React, { Component } from 'react';
import './CarnesList.css'
import {ReactComponent as Deletar} from '../../assets/img/delete.svg'
import {ReactComponent as Editar} from '../../assets/img/edit.svg'

class CarnesList extends Component {
    constructor(props){
        super(props)
        this.list = props.lista
    }
    handlerDeleteItem(id){
        this.props.delete(id);
    }
    render() { 
        return ( 
            <section >
                <table id="carne-lista">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>CORTE</th>
                            <th>TIPO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.list.map((c,i) => 
                                <tr key={i}>
                                    <td>
                                        {c.id}
                                    </td>
                                    <td>
                                        {c.corte}
                                    </td>
                                    <td>
                                        {c.tipo}
                                    </td>
                                    <td>
                                        <Deletar 
                                        value="Deletar" 
                                        title="Deletar"
                                        alt="Deletar"
                                        onClick={this.handlerDeleteItem.bind(this,c.id)}
                                        />
                                        <Editar 
                                        value="Deletar" 
                                        title="Deletar"
                                        alt="Deletar"
                                        onClick={this.handlerDeleteItem.bind(this,c.id)}
                                        />
                                    </td>
                                </tr>
                            )
                        } 
                    </tbody>
                </table>
            </section>
         );
    }
}
 
export default CarnesList;