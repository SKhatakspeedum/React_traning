import React from "react";
import Ul_li from "./navbar_subcom/Ul_li.jsx";
import Logo from "./navbar_subcom/Logo.jsx";


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        {/* <a className="navbar-brand" href="/">  
          Hidden brand
        </a> */}
        <Logo brand="MyLogo"></Logo>

        
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <Ul_li item="Home"></Ul_li>
            <Ul_li item="Link"></Ul_li>
            <Ul_li item="Disabled"></Ul_li>
          </ul>
        
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
