import React from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

    let favs = localStorage.getItem('favs')
    let parsedFavs = JSON.parse(favs)

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {parsedFavs ? (
         parsedFavs.map(dentist => (
          <Link key={dentist.id} to={'/dentist/' + dentist.id}>
              <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}></Card>
          </Link>)
          )
          ) : (
          <h3>No favorites saved.</h3>
          )}
      </div>
    </>
  );
};

export default Favs;
