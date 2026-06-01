import React, { useState } from 'react'

const FeatchData = () => {
    let [apiData, setData]= useState([])
    async  function handleData(){
        let res=await fetch("https://fakestoreapi.com/products")
        let actualData=await (res).json()
        setData(actualData)
    }
  return (
    <div>
      <h1>Featch Api</h1>
      <button onClick={handleData}>FeatchData</button>
      <div>{
        apiData.map((a)=>{
            let{id,title,price,description,category,image}=a
            console.log(id,title,price,description,category,image)
            return(
                <div key={id}>
                <h3>id:{id}</h3>
                <h3>title:{title}</h3>
                <h3>Price:{price}</h3>
                <h3>Description:{description}</h3>
                <h3>Cetegory:{category}</h3>
                <h3>image:{<img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"></img>}</h3>
                </div>
            )           
        })
        }
      </div>
    </div>
  )
}

export default FeatchData
