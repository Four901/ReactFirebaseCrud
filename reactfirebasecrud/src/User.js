import React from 'react'
import {Card} from 'react-bootstrap'
const User = (props) => {
    const user=props.user
  return (
    <div>
        <h4>Name:{user.name} Age:{user.age}</h4>  
    </div>
  )
}

export default User