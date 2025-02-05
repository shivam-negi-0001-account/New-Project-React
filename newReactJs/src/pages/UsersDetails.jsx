import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function UsersDetails() {
    const navegate = useNavigate()
    const { id } = useParams()
    
    return (
        <div>
            <h1>Users Details... {id}</h1>
            <button onClick={() => navegate('/')}>go to home page</button>
        </div>
       
    )
}
