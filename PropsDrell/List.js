import React from 'react'
import Menu from './Menu'
function List(props) {
  return (
    <div>
 <Menu name={props.name} title ={props.title}/>
    </div>
  )
}

export default List