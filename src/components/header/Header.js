import React from 'react'
import Logo from './Logo/Logo'
import SaveButton from './SaveButton/SaveButton'
import './HeaderStyle/Header.css'

function Header() {
  return (
    <header className="container-fluid">
      <div>
        <Logo />
        <SaveButton />
      </div>
    </header>
  )
}

export default Header
