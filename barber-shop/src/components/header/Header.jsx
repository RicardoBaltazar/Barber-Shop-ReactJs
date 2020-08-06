import React from 'react'
import './header.css'

const Logo = require('../../assets/logotipoBarberShop.png')

export default function Header() {
    return (
        <header className='header'>
            <img src={Logo} alt="Logotipo Barber Shop" className='logotipe'/>
            <nav className='nav'>
                <a href="/">HOME</a>
                <a className='link-contact' href="">CONTACT</a>
            </nav>
        </header>
    )
}