import React from "react";
// learn image folder \\
import car1 from './'


export default function carousel(props) {
  return (
    
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel">

       {/* Number of slides */}
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={props.number}>
        </li>
      </ol>

      {/* images */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={props.img} className="d-block w-100" alt="..." />
        </div>
      </div>

      {/* slide */}
      <button
        className="carousel-control-prev"
        type="button"
        data-target="#carouselExampleIndicators"
        data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">{props.slide}</span>
      </button>
    </div>
  );
}
