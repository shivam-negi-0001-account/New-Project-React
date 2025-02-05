import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div>
     <h1> Home</h1>
      <br></br>
      <button onClick={() => navigate('/products/jeans')}>Go To Jeans Page</button> 
      <br></br>
      <br></br>
      <button onClick={() => navigate('/products/shirt')}>Go To Shirt Page</button> 
      <br></br>
      <br></br>
      <button onClick={() => navigate('/users/usersDetails/1')}>Go To User Details</button>
    </div>
  )
}
 