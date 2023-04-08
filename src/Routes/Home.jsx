import React from 'react'
import Card from '../Components/Card'
import { useDentiStates } from '../Components/utils/Context'
import { Link } from 'react-router-dom'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

const {dentiList} = useDentiStates()

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentiList.map(dentist =>
          <Link key={dentist.id} to={'/dentist/' + dentist.id}>
            <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}></Card>
          </Link>)
        }
      </div>
    </main>
  )
}

export default Home