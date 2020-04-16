import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import axios from 'axios';
import EventCards from '../../Components/EventsCards/EventCards';
import { Link } from 'react-router-dom';

export default class Events extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            events : [],
        }

    }

    componentDidMount() {
        axios.get(`https://ecell.nitrr.ac.in/events/list/2019/?format=json`)
        .then(res => {
          const events = res.data.data;
          this.setState({ events });
        })
    }

    render() {
        if(this.state.events.length === 0) {
            return (
                <div class="pageloader is-active"><span class="title">Loading</span></div>
            )
        }

        return (
            <div>
                <Navbar/>
                <div className="container">
                    <div class="columns">
                        {this.state.events.map((event,i) => (i<4) ? (<div class="column is-one-quarter"><Link to={`/event/${event.name}`}><EventCards key={i} event={event}/></Link></div>) : null )}
                    </div>

                    <div class="columns">
                        {this.state.events.map((event,i) => (i>=4 && i<8) ? (<div class="column is-one-quarter"><Link to={`/event/${event.name}`}><EventCards key={i} event={event}/></Link></div>) : null )}
                    </div>
                    <div class="columns">
                        {this.state.events.map((event,i) => (i>=8 && i<12) ? (<div class="column is-one-quarter"><Link to={`/event/${event.name}`}><EventCards key={i} event={event}/></Link></div>) : null )}
                    </div>
                    <div class="columns">
                        {this.state.events.map((event,i) => (i>=12) ? (<div class="column is-one-quarter"><Link to={`/event/${event.name}`}><EventCards key={i} event={event}/></Link></div>) : null )}
                    </div>
                </div>
            </div>
        )
    }
}