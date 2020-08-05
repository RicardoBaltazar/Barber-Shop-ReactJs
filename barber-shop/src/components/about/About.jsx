import React from 'react'
import './about.css'

import Button from '../button/Button'

export default function About() {
    return (
        <>
            <main className='about'>
                <h1>GOOD MEN GO TO GOOD BARBERS</h1>
                <p>The barber shop is an exclusive New York barbershop that offers men's
                haircuts by professionally licensed barbers in the state of New York.
            </p>
            <Button>
                MAKE AN APPOINTMENT
            </Button>
            </main>
        </>
    )
}