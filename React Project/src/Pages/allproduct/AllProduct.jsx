import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./AllProduct.css"

const AllProduct = () => {
let [isLoading, setIsLoading]=useState(true)
 let [productData, setProductData] = useState([])

  // useEffect(()=>{
  //   api();
  // },[])

  let handleAddToCart=async(product)=>{
    let userData= localStorage.getItem("userid")
    let {data}=await axios.get(`http://localhost:5050/users/${userData}`)
    
    let  updatedCart=data.cart?[...data.cart]:[];
    let existingProd= updatedCart.find((ele)=>ele.id===product.id)

    if(existingProd){
      existingProd.quality +=1
    }else{
      updatedCart.push({...product, quality:1})
    }

    axios.patch(`http://localhost:5050/users/${userData}`,{
      cart: updatedCart
    })
    alert("product added")

  };
  // let [productData, setProductData] = useState([])

  useEffect(() => {
    (async () => {
      let res = await axios.get("https://api.escuelajs.co/api/v1/products")
      setProductData(res.data)
    })()
  }, [])



  // function handleHddToCart(){

  // }

  // if(isLoading){
  //   return <h1>Loading...</h1>
  // }
  // else{
  //   return(
  //   <div>

  //   </div>
  //   )
  // }
  return (
    <div className="product-container">

      {
        productData.map((item) => {
          let { id, title, price, description, images } = item

          return (
            <div className="card" key={id}>
              <img src={images} alt={title} />

              <h3>{title}</h3>

              <p className="desc">
                {description.slice(0, 60)}...
              </p>

              <p className="price">${price}</p>

              <button onClick={()=>handleAddToCart(ele)}>Add to Cart </button>
            </div>
          )
        })
      }
    </div>
  )
}

export default AllProduct