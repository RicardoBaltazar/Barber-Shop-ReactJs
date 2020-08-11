import React, { Component } from 'react'
import "./scheduling.css"
import { Link } from 'react-router-dom'
import axios from 'axios'

const urlAgend = 'http://localhost:8000/posts'

class Scheduling extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            name: '', 
            date: '',
            hour: ''
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this)
        this.handleChangeHour = this.handleChangeHour.bind(this)
        this.handleSubmitAgend = this.handleSubmitAgend.bind(this);
    }
    

    handleChangeName(event){
        this.setState({
            name: event.target.value
        })
    }

    handleChangeDate(event){
        this.setState({
            date: event.target.value
        })
    }

    handleChangeHour(event){
        this.setState({
            hour: event.target.value
        })
    }

    handleSubmitAgend(event){
        alert('Agendamento realizado!')

        const name = this.state.name
        const date = this.state.date
        const hour = this.state.hour

        axios.post(urlAgend, {
            Name: name,
            date: date,
            hour: hour
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
            <>
                <form className='formAgend' action="#" method="post" onSubmit={this.handleSubmitAgend}>
                    <Link to="/" className='linkBackHome'> {'< Home'} </Link>
                    <h1>Agendamento</h1>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='name'  value={this.state.name} onChange={this.handleChangeName}/>

                    <label htmlFor="">Date</label>
                    <input type="date" name="" id=""  value={this.state.date} onChange={this.handleChangeDate}/>

                    <label htmlFor="">Hour</label>
                    <input type="time" name="" id=""  value={this.state.hour} onChange={this.handleChangeHour}/>

                    <button type='submit'> SEND </button>
                </form>
            </>
        )
    }
}

export default Scheduling