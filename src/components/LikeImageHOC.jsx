import React, { Component } from 'react'
import HOC from './HOC.JSX'

const LikeImageHOC = (props) => {
  return (
    <div>
      <button onClick={props.functionality}>Like Image {props.data}</button>
    </div>
  )
}

export default HOC(LikeImageHOC)
