import React from 'react'
import './App.css'
const Assignment = () => {
  return (
    <div>
       <div className="container">
         <div className='top'>
        <div className='nav'>
         <div className='home up'><p>Home</p></div>
         <div className='feature up'><p>Feature</p></div>
         <div className='priceing up'><p>Pricing</p></div>
         <div className='terms up'><p>Our terms</p></div>
         <div className='contact up'><p>Contact</p></div>  
       </div>
       <div className="startup pop">Startup 3</div>
       <div><h1 className='forget pop'>Forget About Code</h1></div>
       
       <div className="content pop">Startup Fraemwork gives you complete freedom over your creative process - you don't have to think about any technical aspects. There are no limits and absolutely no coding.</div>

       <div className="btn pop">
  <button>Create an Account</button>
</div>
      </div>
       {/* Free Sample */}
      <div className="white1">
        <div>
       <div><p  className="pop">Free Sample</p>
       </div>
       <div className='heading'>
        <div className="head1 pop"><h1>Powerfull Generator And Free</h1></div>
        <div className="head2 pop"><h1>Figma Sources</h1></div>
       </div>
       </div>
       <div><p  className="pop">Starter framework contains component and complex blockswhich can easily be integrated into almost any design. All of the components are made in the same style and can easily be integrated into projects. allowing you to create hundereds of solutions.</p></div>
      </div>
       </div>
      {/* ------feature------ */}
       <div className="feature">
        <div className='con'></div>
       </div>
        </div>
        
    
  )
}

export default Assignment
