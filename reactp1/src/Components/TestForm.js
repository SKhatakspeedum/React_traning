import React,{useState} from "react";


export default function TestForm(props) {
  
  const handleUpClick =()=>{
    // console.log("Uppercase was clicked"+ text);
    let newText=text.toUpperCase();
    // setText("You have clicked on handleUpClick"); 
    setText(newText)
  }
  const handleOnChange =(event)=>{
    // console.log("On Chnage");
    setText(event.target.value);
  }

  const [text,setText]=useState('Enter text here...');
  return (
    <div>
        <h2>{props.heading}</h2>
      <textarea className="form-control" id="mytextbox" value={text} onChange={handleOnChange} rows="5"></textarea>
      <button className="btn btn-primary mt-2" onClick={handleUpClick} >Convert to Uppercase</button>
    </div>
  );
}
