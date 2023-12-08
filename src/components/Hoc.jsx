import React from "react";
import { useState } from "react";

//using Higher Order Components
const HOC = (OriginalComponent) => {
  function hoc() {
    const [counter, setCounter] = useState(0);

    const handleCounter = () => {
      setCounter(counter + 1);
    };
  
  return (
  <div>
    <OriginalComponent data={counter} functionality={handleCounter}/>
  </div>
  )
  }
  return hoc
};

export default HOC;
