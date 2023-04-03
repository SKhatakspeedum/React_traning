import React,{useState} from "react";
// import About_subcom from "./About_subcom.jsx";
import { toggleStyle } from "../utils/modeChanger";
export default function About(props) {

  const [btntext, setBtnText]=useState("Enable Dark Mode")
  const [mystyle,setmystyle]=useState({
    color:'black',
     backgroundColor:'white'
})    

    
  return (
    <div className='container' style={mystyle}>
        <h2 className="my-2">{props.about}</h2>
      <div className="accordion" id="accordionExample" >


      {/* <About_subcom  season="Spring" define="Spring......." ></About_subcom> */}

        {/* <div className="card">
          <div className="card-header" id="headingOne" style={mystyle}>
            <h2 className="mb-0">
              <button className="btn btn-link btn-block text-left"
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
              {props.define}<code></code>
            </div>
          </div>
        </div>
         */}
        
        {/* <div className="card">
          <div className="card-header" id="headingTwo" style={mystyle}>
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo" >
                Collapsible Group Item #2
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample">
            <div className="card-body" style={mystyle}>
              Some placeholder content for the second accordion panel. This
              panel is hidden by default.
            </div>
          </div>
        </div> */}
        
        
{/*         
        <div className="card">
          <div className="card-header" id="headingThree" style={mystyle}>
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree">
                Collapsible Group Item #3
              </button>
            </h2>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample">
            <div className="card-body" style={mystyle}>
              And lastly, the placeholder content for the third and final
              accordion panel. This panel is hidden by default.
            </div>
          </div>
        </div> */}



      </div>
     <div className="container my-3">
      <button type="button" onClick={() =>{
        toggleStyle(mystyle,setmystyle,setBtnText)
      }} className="btn btn-primary">{btntext}</button>
     </div>
    </div>
  );
}
