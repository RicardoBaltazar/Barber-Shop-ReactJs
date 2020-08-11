import React, { Component } from 'react'
import './form.css'
import axios from 'axios'

const url = 'http://localhost:8000/posts'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '', 
            email: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangeMessage = this.handleChangeMessage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ 
            name: event.target.value
        });
    }

    handleChangeEmail(event) {
        this.setState({ 
            email: event.target.value
        });
    }

    handleChangeMessage(event){
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit(event) {
        alert(this.state.name + ' ' + this.state.email + ' ' + this.state.message);

        const name = this.state.name
        const email = this.state.email
        const message = this.state.message
        /*
        axios.post(url, { name})
        .then(response => alert('post'))
        */

        axios.post(url, {
            Name: name,
            email: email,
            message: message
          })
          .then(function (response) {
            alert('post');
          })
          .catch(function (error) {
            alert('error');
          });

        event.preventDefault();
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <h3>send us a message!</h3>

                <label htmlFor="">Name</label>
                <input type="text" value={this.state.name} onChange={this.handleChange} />

                <label htmlFor="">Email</label>
                <input type="email" name="" id="" value={this.state.email} onChange={this.handleChangeEmail}/>

                <label htmlFor="">Message</label>
                <textarea className='textarea' name="" id="" cols="10" rows="5" value={this.state.message}
                onChange={this.handleChangeMessage}
                >

                </textarea>

                <button type='submit'> SUBMIT </button>
            </form>
        );
    }
}

export default Form




/*
import React, { useState } from 'react'
import './form.css'


export default function Form(props) {

    const [valor, setValor] = useState('ola')

    function handleMessage(e) {
        setValor(e.target.value)
        alert(valor)
        alert(setValor)
    }

    return (
        <>
            <form action="#" className='form'>
                <h3>send us a message!</h3>
                <label htmlFor="">Name</label>
                <input type="text" name="" id="" value=''/>

                <label htmlFor="">Email</label>
                <input type="email" name="" id="" />

                <label htmlFor="">Message</label>
                <textarea className='textarea' name="" id="" cols="10" rows="5"></textarea>

                <button type='submit' onClick={handleMessage}> SUBMIT </button>
            </form>
        </>
    )
}
*/