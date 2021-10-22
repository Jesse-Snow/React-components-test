import React from 'react'

export default class NameForm extends React.Component { 
  constructor(props){
    super(props);
    this.state = { name:''}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e) {
    window.alert(`Seu nome é: ${this.state.name}`);
    e.preventDefault();
  }
  handleInput(e){
    this.setState({name:e.target.value});
  }

  render(){
    return ( 
      <form onSubmit={this.handleSubmit}>
        <label>Nome:
        <input type="text" value={this.state.value} 
          onChange={this.handleInput} />
        </label>
        <label>Enviar:
        <input type="submit" />
        </label>
      </form>
    )
  }

}
