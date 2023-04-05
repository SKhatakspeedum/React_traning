import "./App.css";
import Navbar from "./Components/Navbar";
// import Carousel from './Components/Carousel';
import Session1 from "./Components/Session1";
import Session2 from "./Components/Session2";
import TestForm from "./Components/TestForm";
import AboutUs from "./Components/AboutUs";
import { useState } from "react";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NextPage from "./Components/NewPage";
function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

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
      
      <BrowserRouter>            
      <Navbar mode={mode} toggleMode={toggleMode}></Navbar>
        <Routes>
          <Route path="/AboutUs"element={<AboutUs/>}>
          </Route>
        </Routes>
      </BrowserRouter>
      <Alert alert="Please! Login first."></Alert>
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
        <TestForm className="my-3" heading="Text Box" mode={mode}></TestForm>
      </div>
      <About about="ModeChanger"></About>
      {/* <About season="Summer" define=""></About> */}
      <NextPage/>
    </>
  );
}

export default App;
