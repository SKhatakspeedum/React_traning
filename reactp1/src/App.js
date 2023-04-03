import "./App.css";
import Navbar from "./Components/Navbar";
// import Carousel from './Components/Carousel';
import Session1 from "./Components/Session1";
import Session2 from "./Components/Session2";
import TestForm from "./Components/TestForm";
import About from "./Components/About";
import { useState } from "react";

function App() {
    const [mode,setMode]=useState('dark');







  const [items, setItems] = useState([
    {
      heading: "Spring",
      para: "Spring, also known as springtime, is one of the four temperate seasons, succeeding winter and preceding summer.",
    },
    {
      heading: "Winter",
      para: "Winter is one of the most important seasons in India. It is a part of the four seasons that occur in India.",
    },
    {
      heading: "Summer",
      para: "Summer is the hottest of the four temperate seasons, occurring after spring and before autumn.",
    },
    {
      heading: "Autumn",
      para: "Autumn, also known as fall in American English and Canadian English, is one of the four temperate seasons on Earth.",
    },
  ]);

  return (
    <>
      <Navbar  mode={mode}  ></Navbar>
      <Session1
        align="text-center my-4"
        name="Nature"
        para="Nature is not a place to visit, it is home."
      ></Session1>
        {/* <Carousel></Carousel> */}
      <div className="container my-3 d-flex justify-content-around">
        {items.map((i, idx) => (
          <Session2 heading={i.heading} img="" para={i.para}></Session2>
        ))}  
      </div>
      <div className="container my-5">
        <TestForm className="my-3" heading="Text Box"></TestForm>
      </div>
      <About about="ModeChanger"></About>
      {/* <About season="Summer" define=""></About> */}
    </>
  );
}

export default App;
