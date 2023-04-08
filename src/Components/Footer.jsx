import React from 'react'
import { useDentiStates } from "./utils/Context";

const Footer = () => {

  const {themeState} = useDentiStates()

  return (
    <footer className={themeState}>
        <p>Powered by</p>
        <img src="../images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
