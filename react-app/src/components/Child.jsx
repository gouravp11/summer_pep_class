import React from "react";

const Child = React.memo(() => {
  console.log("Child Rendered");
  return <div>This is Child.</div>;
});

export default Child;
