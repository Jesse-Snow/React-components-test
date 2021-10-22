import React from 'react'

// Multiples Inputs
export default class NameAndAge extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      age:0
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    window.alert(`${this.state.name} tem ${this.state.age}`) 
    e.preventDefault();
  }
  handleInput(e){
    // Computed data
    this.setState({ 
      [e.target.name]:e.target.value
    });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Nome:
        <input type='text' name="name" 
        onChange={this.handleInput} value={this.state.name}/>
        </label>
        <label>Idade:
          <input type='number' name="age"  
          onChange={this.handleInput} value={this.state.age}/>
        </label>
        <label>Enviar:
          <input type='submit' />
        </label>
      </form>
    )
  }
}
