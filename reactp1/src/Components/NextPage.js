import React, { useEffect, useState } from "react";

export default function NextPage() {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  useEffect(() => {
    alert("You Clicked!");
  },[num]);

  return (
    <div className="container text-center my-3">
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click1 me {num}
      </button>
      <button
        className="mx-3"
        onClick={() => {
          setNums(nums + 1);
        }}
      >
        Click2 me {nums}
      </button>
    </div>
  );
}
