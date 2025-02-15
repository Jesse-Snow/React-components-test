import React from 'react'
import ReactDOM from 'react-dom'
import Clock from './Clock'
import Avatar from './Avatar'
import Alert from './Alert'
import Grettings from './Grettings.js'
import ColorList from './ColorList.js'
import NameForm from './NameForm.js'
import NameAndAge from './NameAndAge.js'


// Testing data
const user1 = {
  author:{name:'Master Swordsman',avatarUrl:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'},
  text:'You are a great Coder!',
  date:new Date(),
}
const cores = ['Vermelho','Amarelo','Verde','Roxo'];

// Menu Comonent
function Menu(){
  return (
    <div className="menu">
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
      <div>
        <h2>Alert Component</h2>
        <Alert alertTxt='Conseguiuuuuu' />
      </div>
      <div>
        <h2>Grettings Component</h2>
        <Grettings isLogged={true} />
      </div>
      <div>
        <h2>ColorList Component</h2>
        <ColorList colors={cores} />
      </div>
      <div> 
        <h2>NameForm Component</h2>
        <NameForm />
      </div>
      <div>
        <h2>NameAndAge Component</h2>
        <NameAndAge />
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
