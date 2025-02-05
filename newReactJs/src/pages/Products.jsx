import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

export default function Products() {
  const Navigate = useNavigate()
  return (
    <div>
      <NavLink to={'jeans'}>Jeans</NavLink> &nbsp; &nbsp;
      <NavLink to={'shirt'}>Shirt</NavLink> &nbsp; &nbsp;
      <br></br>
      <button onClick={() => Navigate('/about')}>return to about page</button>
      <Outlet></Outlet>
    </div>
  )
}
