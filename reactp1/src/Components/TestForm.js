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
    <div>
        <h2>{props.heading}</h2>
      <textarea className="form-control" id="mytextbox" value={text} onChange={handleOnChange} rows="5"></textarea>
      <button className="btn btn-primary mt-3" onClick={handleUpClick} >Convert to Uppercase</button>
      <button className="btn btn-primary mx-3 mt-3" onClick={handleLowClick}>Convert to Lowercase</button>
      
    </div>
  );
}
