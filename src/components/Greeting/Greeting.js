/* eslint-disable quotes, jsx-quotes */

import React from "react";
import { useSelector } from "react-redux";
// import Loading from "../Loading";

const Greeting = () => {
  const { greeting } = useSelector((state) => state.greetings);
  console.log(greeting);
  return (
    <div className='greetings'>
      <h1>
        Greeting:
        {greeting}
      </h1>
    </div>
  );
};

export default Greeting;
