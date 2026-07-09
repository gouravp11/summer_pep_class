import React from "react";

const Child2 = React.memo(({ handleClick }) => {
  console.log("Child2 rendered");
  return (
    <div>
      This is Child2
      <button onClick={handleClick}>Child2 Click</button>
    </div>
  );
});

export default Child2;
