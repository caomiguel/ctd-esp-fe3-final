import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <main className=''>
      <h1>Want to know more?</h1>
      <h3>Subscribe to our Newsletter</h3>
      <Form/>
    </main>
  )
}

export default Contact