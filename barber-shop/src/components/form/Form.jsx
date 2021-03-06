import React, { Component } from 'react'
import './form.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const url = 'https://barber-shop-project.herokuapp.com/messages'

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
        alert("Mensagem Enviada!");

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
            console.log(response);
            
          })
          .catch(function (error) {
            console.log(error);
          });

        event.preventDefault();
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <Link to="/" className='linkBackHome'> {'< Home'} </Link>

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

                <button type='submit'> SEND </button>
            </form>
        );
    }
}

export default Form