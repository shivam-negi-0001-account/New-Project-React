import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
    return (
        <div>

            <NavLink to={"/"}>Home</NavLink> &nbsp;  &nbsp;
            <NavLink to={"/about"}>About</NavLink>    &nbsp; &nbsp;
            <NavLink to={"/contact"}>Contact</NavLink>   &nbsp; &nbsp;
            <NavLink to={"/products"}>Products</NavLink>   &nbsp; &nbsp;
            <NavLink to={"/users/"}>Users</NavLink>   &nbsp; &nbsp;
        </div>
    )
}
