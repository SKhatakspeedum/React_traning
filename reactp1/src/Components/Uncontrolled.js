import React, { useRef, useState } from "react";

const Uncontrolled = () => {
  const LuckyName = useRef(null);
  const [show, setShow] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const name = LuckyName.current.value;
    name === "" ? alert("Please Fill the data") : setShow(true);
  };

  return (
    <div className="container mt-5 text-center">
      <div className="uncontrolledcss">
        <h3 className="mt-4">Uncontrolled Form by useref.</h3>
        <form className="mt-4" onSubmit={submitForm} action="">
          <div>
            <label htmlFor="LuckyName">
              <strong>Enter your name: </strong>
            </label>
            <input
              type="text"
              className="ml-2"
              id="LuckyName"
              ref={LuckyName}
            ></input>
          </div>
          <button className="mt-3 mb-3 bg-primary">Submit</button>
        </form>
        <p>
          {show ? (<strong>{`🎊🎈Congratulations 😍 🎊${LuckyName.current.value}!🎈🎊`}</strong>) : (" ")} </p>
      </div>

      <hr></hr>
    </div>
  );
};

export default Uncontrolled;
