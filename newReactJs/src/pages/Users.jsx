import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Users() {
  return (
    <>
      <NavLink to={'usersDetails/1'}>User 1</NavLink> &nbsp; &nbsp;
      <NavLink to={'usersDetails/2'}>User 2</NavLink> &nbsp; &nbsp;
      <NavLink to={'usersDetails/3'}>User 3</NavLink> &nbsp; &nbsp;
      <Outlet></Outlet>
    </>
  )
}
