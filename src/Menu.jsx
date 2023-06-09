import React from "react";

const Menu = ({ on, toggle }) => {
  return (
    <div>
      <button onClick={toggle}>View</button>
      {on && (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
          eligendi facere ratione facilis libero, ipsum ullam fugit pariatur
          optio iure rem qui unde perferendis sunt, dolorem velit? Neque,
          perspiciatis dolorum?
        </p>
      )}
    </div>
  );
};

export default Menu;
