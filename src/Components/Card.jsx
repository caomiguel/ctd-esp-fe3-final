import React from "react";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

        <img className="doctor-img" src={"./images/doctor.jpg"} alt={name}/>
        <h3>{name}</h3>
        <span><b>Username:</b> {username}</span>
        <span><b>ID:</b> {id}</span><p/>
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
