import React, { useEffect, useState } from 'react'

export default function Prtc() {
    const informacion = {
        name: "audiQ7",
        year: 2022,
        color: "red",
    }

    const cars = ['ford', 'bmw', 'audi', 'thar']
    const shot = (e) => {
        alert(e)
    }
    const shots = (e, a) => {
        alert(a.type)
    }
  
    const [count , setCount] = useState(0)

    useEffect(()=> {
        setTimeout((count) =>  {
           count + 1
        }, 1000);
    })
    return (
        <div>
            <h1>helllo prtc</h1>

            <h4>`my car name is {informacion.name} <br></br> my car year is {informacion.year} <br></br>
                my car color is {informacion.color} `</h4>

            <button onClick={() => shot('Hello React World !')}>click 1</button>
            <br></br>
            <br></br>
            <button onClick={(event) => shots('Hello React World !', event)}>click 2</button>
            {/* <h1>my car length {cars.length} in your garage</h1> */}

            {
                cars.map((car, i) =>
                    <ul key={i}>
                        <li>I am a {car}</li>
                    </ul>
                )
            }
<h1>count {count}</h1>
            

        </div>
    )
}
