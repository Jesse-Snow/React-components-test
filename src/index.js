import React from 'react'
import ReactDOM from 'react-dom'
import Clock from './Clock'
import Avatar from './Avatar'


// Testing data
const user1 = {
  author:{name:'Master Swordsman',avatarUrl:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'},
  text:'You are a great Coder!',
  date:new Date(),
}

// Menu Comonent
function Menu(){
  return (
    <div>
      <h1>Welcome to Testing React!</h1>
      <p>Put Components in the code here</p>
      <div>
        <h2>Clock Component</h2>
          <Clock />
      </div>
      <div>
        <h2>Avatar Component</h2>
        <Avatar author={user1.author} text={user1.text} 
        date={`${user1.date.getUTCDate()}/
        ${user1.date.getUTCMonth()} /
        ${user1.date.getUTCFullYear()}`}/>
      </div>
    </div>
  )
}


// App Component
class App extends React.Component {
   constructor(props){
     super(props);
   }
   render(){
     return <Menu />
   } 
}
ReactDOM.render(<App />, document.getElementById('root'));
