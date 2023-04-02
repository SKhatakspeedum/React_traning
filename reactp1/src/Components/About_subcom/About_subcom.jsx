import React from "react";

export default function About_subcom(props) {
  return (
    <div className="card">
      <div className="card-header" id="headingOne" style={mystyle}>
        <h2 className="mb-0">
          <button
            className="btn btn-link btn-block text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne">
            {props.season}
          </button>
        </h2>
      </div>
      <div
        id="collapseOne"
        className="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordionExample">
        <div className="card-body" style={mystyle}>
          {props.define}
          <code></code>
        </div>
      </div>
    </div>
  );
}
