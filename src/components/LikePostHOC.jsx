import React from 'react'
import NewComponent from './HOC.JSX'

function LikePostHOC(props) {
  return (
    <div>
      <button onClick={props.functionality}>Like Post {props.data}</button>
    </div>
  )
}

export default NewComponent(LikePostHOC)
