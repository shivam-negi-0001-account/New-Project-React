import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Jeans() {
  const nav = useNavigate()
  return (
    <div>
        <h1>Jeans Are Available..</h1>
        <img width={'300px'} height={'300px'} src="https://th.bing.com/th/id/OIP.fMQa8v7q_SJkHNruwtQ42AHaLK?rs=1&pid=ImgDetMain" alt="" />
        <br></br>

        <button onClick={() => nav('/')}>Home Page Return</button> 
        <br></br>
        <br></br>
        <button onClick={() => nav('/about')}>About Page Return</button>
    </div>
  )
}
