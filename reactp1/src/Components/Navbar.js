import React from "react";
import Ul_li from "./navbar_subcom/Ul_li.jsx";
import Logo from "./navbar_subcom/Logo.jsx";
import Form from "./navbar_subcom/Form.jsx";


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Logo brand="MyLogo"></Logo>  
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <Ul_li item="Home"></Ul_li>
            <Ul_li item="Link"></Ul_li>
            <Ul_li item="Disabled"></Ul_li>
          </ul>  
          <Form button="Search"></Form>
      </div>
    </nav>
  );
}
