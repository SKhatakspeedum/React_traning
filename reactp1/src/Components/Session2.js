import React from 'react'

export default function Session2(props) {
  return (
    <div className="img-4text">
    <div className="row">
      <div className="col-3 text">
        <h4>{props.num}</h4>
        <h5>{props.heading}</h5>
        <span className="line mt-4"></span>
      </div>
    </div>
  </div>
  )
}
