import React from 'react'
import { Fragment } from 'react'

const ChildApi = ({users}) =>{
   // console.log(users)   
  return (
    <div>
        
        <h1>ChildApi</h1>
        {
         users.map((data)=>{
         let {id,name,email}=data
         
         console.log(id,name,email)
         return(
           <Fragment key={id}>
            <h1>{id}{name}{email}</h1>
           </Fragment >
         )
})
}
    </div>
  )

}

export default ChildApi
