import React from 'react'
import './header.css'

const Logo = require('../../assets/logotipoBarberShop.png')

export default function Header() {
    return (
        <header className='header'>
            <img src={Logo} alt="Logotipo Barber Shop" className='logotipo'/>
            <nav className='nav'>
                <a href="/">Sobre</a>
                <a href="">Contato</a>
            </nav>
        </header>
    )
}