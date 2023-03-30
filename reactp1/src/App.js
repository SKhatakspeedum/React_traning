
import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Session1 from './Components/Session1';
import Session2 from './Components/Session2';
import TestForm from './Components/TestForm';

function App() {
  return (
    <>
   <Navbar></Navbar>
   <Session1 name="First"></Session1>
   <Carousel></Carousel>
   <Session1 className="text-center" name="Second"></Session1>
   <div className='container my-4 d-flex justify-content-around' >
   <Session2 num="5156" heading="props1 heading"></Session2>
   <Session2 num="5896" heading="props2 heading"></Session2>
   <Session2 num="9534" heading="props3 heading"></Session2>
   </div>
    <div className='container my-5'>
   <TestForm className="my-3" heading="Text Box"></TestForm>
   </div>
   
</>
  );
}

export default App;
