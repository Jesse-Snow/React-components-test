import React from 'react'

// Clock
class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state= {date:new Date()}
  }

  componentDidMount(){
    this.timerID = setInterval(()=>this.tick(),1000);
  }
  componentWillUnmount(){
    clearInterval(this.timerID)
  }
  tick(){
    this.setState({date: new Date()})
  }

  render(){
    return (
      <div>
        <h1>Hi!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

// Avatar

function Avatar(props){
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo_Name">{props.author.name}</div>
      </div> 
      <div className="Comment_text">
      {props.text}
      </div>
      <div className="Comment_date">
      {props.date}
      </div>
    </div>
  )
}

// Alert 

class Alert extends React.Component {
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

// Grettings 

class Grettings extends React.Component {
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

module.exports = { 
  Avatar, 
  Grettings,
  Alert,
  Clock
}
