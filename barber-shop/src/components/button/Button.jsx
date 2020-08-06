import React from 'react'
import './button.css'


export default function Button (props) {
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    )
}