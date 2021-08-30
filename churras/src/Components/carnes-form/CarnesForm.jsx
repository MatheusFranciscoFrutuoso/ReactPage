import React, { Component } from 'react';

class CarnesForm extends Component {
    id;
    corte;
    tipo;

    handlerInputId(event){
        this.id = event.target.value;
        event.stopPropagation();
    }
    handlerInputCorte(event){
        this.corte = event.target.value;
        event.stopPropagation();
    }
    handlerInputTipo(event){
        this.tipo = event.target.value;
        event.stopPropagation();
    }
    handlerSubmitForm(event){
        let carne = {"id":this.id, "corte":this.corte, "tipo":this.tipo};
        event.stopPropagation();
        event.preventDefault();
        this.props.create(carne);
    }
    render() { 
        return ( 
            <section>
                <form onSubmit={this.handlerSubmitForm.bind(this)}>
                    <label htmlFor=""></label>
                    <input type="number" id="id" placeholder="Insira um id" onChange={this.handlerInputId.bind(this)}/><br />
                    <label htmlFor=""></label>
                    <input type="text" id="corte" placeholder="Insira um corte" onChange={this.handlerInputCorte.bind(this)}/><br />
                    <label htmlFor=""></label>
                    <input type="text" id="tipo" placeholder="Insira um tipo" onChange={this.handlerInputTipo.bind(this)}/><br />
                    <input type="submit" placeholder="Salvar" />
                </form>
            </section>
         );
    }
}
 
export default CarnesForm;