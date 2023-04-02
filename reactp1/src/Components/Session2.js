import React from "react";

export default function Session2(props) {
  return (
    <>
    <div className="flex-column text-justify mx-3">
      <h3>{props.heading}</h3>
      <img src={props.img}></img>    
      <p>{props.para}</p>
    </div>  
    </>
  );
}
