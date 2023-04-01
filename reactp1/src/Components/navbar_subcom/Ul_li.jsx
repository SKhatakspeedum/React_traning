import React from "react";

export default function Ul_li(props) {
  return (
    <>
      <li className="nav-item active">
        <a className="nav-link" href="/">{props.item}<span className="sr-only">(current)</span>
        </a>
      </li>
    </>
  );
}
