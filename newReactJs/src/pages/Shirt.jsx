import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Shirt() {
  const navbar = useNavigate()
  return (
    <div>
        <h1>Shirt Are Available...</h1>
        <img width={'300px'} height={'300px'} src="https://purepng.com/public/uploads/large/purepng.com-blue-long-sleeve-shirtbutton-front-shirtgarmentdressshirtbluelongsleeve-1421526308750fivmv.png" alt="" />
        <button onClick={()=> navbar('/')}>return to home page</button>
    </div>
  )
}
