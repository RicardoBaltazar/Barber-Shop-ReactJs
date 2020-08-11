import React from 'react'
import "./scheduling.css"

export default function Scheduling() {
    return (
        <>
        <a href="/" className='linkBackHome'> {'< Home'} </a>
        <form className='formAgend' action="" method="post">
        <h1>Agendamento</h1>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='name'/>

            <label htmlFor="">Date</label>
            <input type="date" name="" id=""/>

            <label htmlFor="">Hour</label>
            <input type="time" name="" id=""/>

            <button type='submit'> SUBMIT </button>
        </form>
        </>
    )
}