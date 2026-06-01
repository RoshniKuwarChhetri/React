import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Cart = () => {
  let[userData, setUserData]=useState([])
  let [isLoading, setIsLoading]= useState(true)

  useEffect(()=>{
    async function getData(){
      let userId =localStorage.getItem("userId")
        let {data}=await axios.get(`http://localhost:5050/users/user/${userId}`)
        setIsLoading(!isLoading)
        setUserData(data)
      
    }getData()
  },[])

  if(isLoading){
    return <h1>Loading...</h1>
  }else{
    return(
      <div>
 {
        userData?.Cart.length>0?(
          userData.cart.map((data)=>{
            let {id,title,price,description,catagory}=data
            let{image}=catagory;
            return(
              <div style={{border:"1px solid red"}}>
               <h1>{id}</h1>
               <h2>{title}</h2>
               <h2>{price}</h2>
                <h2>{description.slice(0,25)}...</h2>
                <img src="{image}" alt="" height={200} />
                <button>Remove To Cart</button>
              </div>
            )

          })
        ):(
          <h2>Your cart is Empty</h2>
        )
      }
      </div>
    )
  }
  
}

export default Cart
