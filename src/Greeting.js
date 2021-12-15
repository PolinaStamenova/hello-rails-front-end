import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const { greeting } = useSelector((state) => state.greetings);
  return (
    <div className="greetings">
      <h1>
        Greeting:
        {greeting}
      </h1>
    </div>
  );
};

export default Greeting;
