import React from 'react'
import List from './List'
function Footer(props) {
  return (
    <div>
      <List name={ props.name} title={ props.title}/>
    </div>
  )
}

export default Footer