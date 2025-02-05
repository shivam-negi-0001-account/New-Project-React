import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const [status , setStatus] = useState(false)
  const handleLogin = () => {
    setStatus(true)
  }

  if (status === true) {

    return <h2>hello</h2>
  } 
  else {
    return (
      <div>
        <h1>
          Login
        </h1>
        <label htmlFor="#">User</label>
        <input type="text" name="#" id="#" />
        <br></br>
        <br></br>

        <label htmlFor="#">Password</label>
        <input type="password" name="#" id="#" />
        <br></br>
        <br></br>

        <button onClick={() => handleLogin()}>Login</button>
        <br></br>
        <br></br>

        <button onClick={() => Navigate('/products')}>go to products page</button>
      </div>
    )
  }
  const Navigate = useNavigate()

}
