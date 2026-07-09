import React, { useCallback, useMemo, useState } from "react";
import Form from "./components/Form";
import { UploadImage } from "./components/UploadImage";
import Child from "./components/Child";
import Child2 from "./components/Child2";

const App = () => {
  const [count, setCount] = useState(0);
  function expensiveTask(num) {
    let res = 1;
    console.log("Calculating...");
    for (let i = 0; i < 100000000; i++) {
      res += num;
    }

    return res;
  }
  // let result = useMemo(()=>expensiveTask(3), [count]);

  const handleClick = useCallback(() => {
    () => {
      console.log("Clicked");
    };
  }, []);

  return (
    <div>
      {/* <Form/> */}
      {/* <UploadImage/> */}
      {/* <Child/> */}
      {/* <p>Result is {result}.</p> */}
      <Child2 handleClick={handleClick} />
      <p>Count is {count}.</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default App;
