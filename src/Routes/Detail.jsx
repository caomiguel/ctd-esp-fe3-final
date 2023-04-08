import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  
  const {id} = useParams()
  
  const url = 'https://jsonplaceholder.typicode.com/users/' + id
  let favs = localStorage.getItem('favs')
  
  useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(data => setDentist(data))
  }, [url])

  const [dentist, setDentist] = useState({})

  const addFav = () => {
    if (favs) {
      let parsedFavs = JSON.parse(favs)
      favs = [...parsedFavs, dentist]
    } else {
      favs = [dentist]
    }
    localStorage.setItem('favs', JSON.stringify(favs))
  }

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <div className='card-grid'>
        <div className='card-detail'>
            <h1>Detail Dentist {id}</h1>
            {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
            {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
            <img className='doctor-img' src={"../images/doctor.jpg"} width='200px' height='200px' alt={dentist.name}/>
            <h3><b>Name:</b> {dentist.name}</h3>
            <h3><b>E-mail:</b> {dentist.email}</h3>
            <h3><b>Phone:</b> {dentist.phone}</h3>
            <h3><b>Website:</b> {dentist.website}</h3>
            <button onClick={addFav} className="favButton">⭐</button>
        </div>
      </div>
    </>
  )
}

export default Detail