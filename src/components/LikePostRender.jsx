import React from 'react'

function LikePostRender() {
  return (
    <div>
      <button onClick={props.functionality}>Like Post {props.data}</button>
    </div>
  )
}

export default LikePostRender
