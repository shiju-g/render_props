import React from "react";
import { useState } from "react";

const Toggler = (props) => {
  const [on, SetOn] = useState(false);

  const toggle = () => {
    SetOn(!on);
  };

  return <div>{props.children({ on, toggle })}</div>;
};

export default Toggler;
