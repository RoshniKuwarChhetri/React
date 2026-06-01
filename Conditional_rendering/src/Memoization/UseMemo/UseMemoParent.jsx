import React, { useState, useMemo } from 'react'

const UseMemoParent = () => {
   let [count, setCount] = useState(0);
   let [displayCount, setDisplayCount] = useState(0);

   console.log(`Display Count is ${displayCount}`)

  useMemo(() => {
      console.log("Expensive function is running");
      let res = 0;
      for (let i = 0; i < 100000000; i++) {
         res = count + 1;
      }
      return res;
   }, [count]);

   return (
      <div>
         <h1>Count is {count}</h1>
         <button onClick={() => setCount(count + 1)}>Change Count</button>

         <h1>Display Count is {displayCount}</h1>
         <button onClick={() => setDisplayCount(displayCount + 1)}>
            Change Display Count
         </button>

         <h2>Expensive Value: {expensiveValue}</h2>
      </div>
   )
}

export default UseMemoParent