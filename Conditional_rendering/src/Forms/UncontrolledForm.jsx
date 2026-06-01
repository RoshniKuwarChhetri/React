import React, { useRef } from 'react'

const UncontrolledForm = () => {
    let userNameRef = useRef()
    let passwordRef = useRef()

    function handleSubmit(e){
        e.preventDefault()

        let formData = {
            userName: userNameRef.current.value,
            password: passwordRef.current.value
        }

        console.log(formData)
    }

    return (
        <div>
            <h1>UnControlled</h1>

            <form onSubmit={handleSubmit}>
                
                <input type="text" ref={userNameRef} />
                <br /><br />
                
                <input type="password" ref={passwordRef} />
                <br /><br />
                
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default UncontrolledForm