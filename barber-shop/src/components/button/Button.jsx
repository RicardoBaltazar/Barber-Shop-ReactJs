import React from 'react'
import './button.css'


export default function Button (props) {
    return (
        <a className='button' href='#/scheduling'>
            {props.children}
        </a>
    )
}