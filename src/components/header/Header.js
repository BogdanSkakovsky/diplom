import React from 'react'
import './Header-css/header.css'
import Logo from './Logo/Logo'
import ButtonSave from './ButtonSave/ButtonSave' 
function Header() {
  return (
    <div className='container-fluid header  '>
      <header>
        <Logo />
        <Button />
      </header>
    </div>
  )
}



function Button() {
  return (
    <div className="button col-lg-6 float-right d-flex justify-content-end">
      <button className="btn btn-primary">SAVE E-MAIL</button>
    </div>
  )
}

export default Header
