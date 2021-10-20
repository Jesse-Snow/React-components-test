import React from 'react'

export default class ColorList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let allColors = this.props.colors.map( (color,idx) => {
      return <li key={idx}>{color}</li>
    }) 
    return <ul>{allColors}</ul>
  }
}
