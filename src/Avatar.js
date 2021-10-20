import  React  from  'react'

export default function Avatar(props){
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


