import React from 'react'

export default function Form(props) {
  return (
    <div>
        <form className="form-inline my-2 my-lg-0">
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit">
            {props.button}
          </button>
        </form>   
    </div>
  )
}
