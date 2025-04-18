import { useEffect, useState } from "react";

export default function Test() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {}, [count >= 0]);

  return (
    <div>
      <div className="p-4  m-4 font-extrabold w-8 h-auto bg-slate-300">
        <button type="button" onClick={increment}>
          +
        </button>
      </div>
      <div className="p-4  m-4 font-extrabold w-8 h-auto bg-slate-300">
        <button type="button" onClick={decrement}>
          -
        </button>
      </div>
      <h1>Count is : {count}</h1>
    </div>
  );
}
