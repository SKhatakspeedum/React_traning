import React,{useState} from "react";
import {Link} from "react-router-dom";


const Ul_li = (props)=> {
  return (
    <>
      <li className="nav-item d-flex flex-row active">
        {props.items.map((i, idx) => (
          <Link className="nav-link" to={i.way}>{i.item}<span className="sr-only">(current)</span>
          </Link>
        ))}
      </li>
    </>
  );
}
export default Ul_li