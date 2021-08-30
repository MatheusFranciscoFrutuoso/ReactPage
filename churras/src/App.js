import './assets/css/App.css';
import { Component } from 'react';
import CarnesForm from './Components/carnes-form';
import CarnesList from './Components/carnes-list';

class App extends Component {
    list = [];
    constructor (){
      super();
      this.state = {
        list : this.list
      }
    }

    create(model){
      this.list.push(model);
      this.setState({
        list: this.list
      })
      console.log(model);
    }
    delete(id){
      let indexId = this.list.findIndex( c => c.id === id)
      this.list.splice(indexId, 1)
      this.setState({
        list: this.list
      })
      console.log(id);
    }
  render(){
    return (
      <section>
        <CarnesForm create={this.create.bind(this)}/>
        <CarnesList lista={this.list} delete ={this.delete.bind(this)}/>
      </section>
    )    
  }
}

export default App;
