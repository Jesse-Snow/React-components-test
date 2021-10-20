import React from 'react'


export default class Alert extends React.Component {
  constructor(props){
    super(props);
    this.giveAlert = this.giveAlert.bind(this)
  }

  giveAlert() {
    window.alert(this.props.alertTxt)
  }
  render(){
    return <button onClick={this.giveAlert}>Clique</button>
  }
}
