import React from 'react'
import './Header-css/header.css'
import Logo from './Logo/Logo'
import SaveButtom from './SaveButtom/SaveButton'
function Header() {
  return (
    <div className='container-fluid header  '>
      <header>
        <Logo />
        <SaveButtom />
      </header>
    </div>
  )
}

export default Header
