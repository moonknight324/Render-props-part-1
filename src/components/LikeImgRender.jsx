import React from 'react'

function LikeImgRender() {
  return (
    <div>
      <button onClick={props.functionality}>Like Image {props.data}</button>
    </div>
  )
}

export default LikeImgRender
