import React from "react";
import GrandChild from "./GrandChild";

const Child = React.memo(() => {
  return (
    <div>
      This is Child.
      <GrandChild />
    </div>
  );
});

export default Child;
