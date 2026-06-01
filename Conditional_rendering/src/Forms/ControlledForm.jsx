import React, { useState } from 'react'

const ControlledForm = () => {
   let [formData, setFormData] = useState({
        userName: "",
        password: ""
    })

    function handleChange(e) {
        let { name, value } = e.target;

        setFormData({...formData,[name]:value})
    }

    function handleSubmit(e){
       e.preventDefault()
          console.log(formData)
       setFormData({
        userName: "",
        password: ""
       })
    }

  return (
    <div>
      <h1>Controlled form</h1>
      <br />
      
      <form onSubmit={handleSubmit}>
       <input 
         type="text" 
         name='userName'   // ✅ fixed
         value={formData.userName}   // ✅ fixed
         onChange={handleChange}
       /> 
       
       <br /><br /><hr /> 
       
      <input 
        type="password" 
        name='password' 
        value={formData.password} 
        onChange={handleChange} 
      />

       <button type="submit">Submit</button>
      </form>
    </div>
  ) 
}

export default ControlledForm