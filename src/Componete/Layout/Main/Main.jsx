import React from 'react'
import { Card } from '../../IU/Card/Card'

export const Main = () => {
  return (
    <div>
        <Card />
    </div>
  )
}

// import React, { useState, useEffect } from 'react';
// import { Card } from '../../UI/Card/Card';
// import { Buscar } from '../../UI/Buscar/Buscar';


// const URL = 'https://rickandmortyapi.com/api/character';


// export const LayoutMain = () => {

//   const [personaje, setpersonaje] = useState([])
//   const [loading, setloading] = useState(true)
//   const [buscar, setbuscar] = useState('')

//   useEffect(() => {
//     const getpersonaje = async () => {
//       try {
//         const response = await fetch(URL)
//         const data = await response.json()
//         setpersonaje(data.results)
//         setloading(false)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     getpersonaje()
//   }, [])

//   const personajebuscar = personaje.filter((personaje) =>
//     personaje.name.toLocaleLowerCase().includes(buscar.toLocaleLowerCase())
//   )

//   return (
//     <div>
//       <Buscar filter={buscar} setbuscar={setbuscar} />
//       <section className='ContainerProgram'>
//         {loading ? (
//           <p>Cargando</p>
//         ) : personajebuscar.length > 0 ? (
//           personajebuscar.map((personaje) => (
//             <Card key={personaje.id} personaje={personaje} />
//           ))
//         ) : (
//           <p>No se encontro el Personaje {' '}<strong>"{buscar}"</strong>.</p>
//         )}
//       </section>
//     </div>
//   )
// }
