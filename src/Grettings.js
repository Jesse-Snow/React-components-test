import React from 'react'


export default class Grettings extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.isLogged === true){
      return <h1>Hello Again</h1>
    }else {
      return <h1>Welcome</h1>
    }
  }
}

