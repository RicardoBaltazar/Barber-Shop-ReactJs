import React from 'react'
import './form.css'


export default function Form() {
    return (
        <>
            <form action="" className='form'>
                <h3>send us a message!</h3>
                <label htmlFor="">Name</label>
                <input type="text" name="" id="" />

                <label htmlFor="">Email</label>
                <input type="email" name="" id="" />

                <label htmlFor="">Message</label>
                <textarea name="" id="" cols="30" rows="5"></textarea>

                <button type='submit'> SUBMIT </button>
            </form>
        </>
    )
}