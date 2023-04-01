import React from "react";

export default function logo(props) {
  return (
    <div>
      <a className="navbar-brand" href="/">
       {props.brand}
      </a>
    </div>
  );
}
