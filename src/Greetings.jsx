import React from "react";

const Greetings = ({ on, toggle }) => {
  return (
    <div>
      <button onClick={toggle}>{on ? "Say Hello" : "Say Goodbye"}</button>
      {on ? <p>Good Bye</p> : <p>Hello</p>}
    </div>
  );
};

export default Greetings;
