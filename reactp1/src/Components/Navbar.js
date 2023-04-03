import React from "react";
import Ul_li from "./navbar_subcom/Ul_li.jsx";
import Logo from "./navbar_subcom/Logo.jsx";
import Form from "./navbar_subcom/Form.jsx";


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Logo brand="MyNature"></Logo>  
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <Ul_li item="Home"></Ul_li>
            <Ul_li item="About"></Ul_li>
            <Ul_li item="Contact"></Ul_li>
          </ul>  
          <div className="custom-control custom-switch ">
            <input type="checkbox" onClick={props.toggleMode} className="custom-control-input" id="customSwitch1"/>
            <label className={`custom-control-label text-light text-${props.mode==="light"?"dark":"light"}`} htmlFor="customSwitch1">Enable Dark Mode</label>
          </div>
      </div>
    </nav>
  );
}
