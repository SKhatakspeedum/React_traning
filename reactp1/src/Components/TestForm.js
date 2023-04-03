import React,{useState} from "react";

export default function TestForm(props) {
  const handleUpClick =()=>{
    console.log("Uppercase was clicked"+ text);
    let newText=text.toUpperCase();
    setText(newText)
  }

  const handleLowClick =()=>{
    console.log("Lowercase was clicked"+ text);
    let newText=text.toLowerCase();
    setText(newText);
  }

  const handleOnChange =(event)=>{
    setText(event.target.value);
  }

  const [text,setText]=useState('');
  return (
    // <div  style={{color:props.mode==="dark"?"white":"black"}}>                  for text color
    <div>
      <h2>{props.heading}</h2>
      {/* <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"#454040":"white",color:props.mode==="dark"?"white":"black" }} rows="5"></textarea> */}
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"#454040":"white",color:"black"}} rows="5"></textarea>

      <button className="btn btn-primary mt-3" onClick={handleUpClick} >Convert to Uppercase</button>
      <button className="btn btn-primary mx-3 mt-3" onClick={handleLowClick}>Convert to Lowercase</button>
    </div>
  );
}
