import React, { useState } from 'react'
import UseState from './Component/UseState'

const App = () => {
   let [name,  setname] =useState("rani")
    function nameChange(){
        setname("raja")
    }
    
  let [num, setNum]=useState(100)
  function changeNum(){
    setNum(60)
  }

  let [arr ,setArr]=useState([10,20,30])
  function array(){
    setArr([50,50,60])
  }

  let [obj, setObj]=useState({objName:"mohan",age:22})
  function changeObj(){
    let newObj={...obj}
    newObj.objName="mohini"
    newObj.age=33
    setObj(newObj)

  }

  let [num1, setNum1]=useState([1,2,3])
  function array1(){
     let num2=[...num1]
     num2[0]=10
     num2[1]=20
     num2[2]=30
     setNum1(num2)
  }

  <br />

  let [count, setCount]=useState(10)
      function inc() {
        setCount(count+1)
      }
    
      function dec(){
        setCount(count-1)
      }
      function reset(){
        setCount(0)
      }
      function jumpByFive(){
        setCount(count+5)
      }
      
      let[toggle,setToggle]=useState(false)
      
  function toggling(){
    setToggle(!toggle)
  }
  return (
    <div>
      <h1>hello my name is {name} my marks are {num}</h1>
      <h1>original array is {arr}</h1>
      <h1>{obj.objName},{obj.age}</h1>
      <button onClick={nameChange}>Name</button>
      <button onClick={changeNum}>Marks</button>
      <button onClick={array}>Array</button>
      <br /><br /><br />
      <h2>counting is{count}</h2>
      <h3>{num1[0]},{num1[1]},{num1[2]}</h3>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
      <button onClick={reset}>Reset</button>
      <button onClick={jumpByFive}> jump ny five</button>
      <button onClick={changeObj}>Object</button>
      <br /><br /><br />
      <button onClick={array1}>Array</button>
      {toggle?<UseState/>:"no component"}

      <button onClick={toggling}>toggle</button>




      

    </div>
  )
}

export default App
