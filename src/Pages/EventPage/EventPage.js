import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import axios from 'axios';

class EventPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            event : null,
        }
    }

    componentDidMount() {
        const event_id = this.props.match.params.id;
        console.log(event_id);
        axios.get(`https://ecell.nitrr.ac.in/events/list/2019/?format=json`)
        .then(res => {
          const events = res.data.data;
          for (let index = 0; index < events.length; index++) {
              if(event_id===events[index].name) {
                this.setState({ 
                    event: events[index] 
                  });
              }
          }
          
        })
    }


    render() {
        if(this.state.event === null) {
            return (
                <div class="pageloader is-active"><span class="title">Loading</span></div>
            )
        }
        
        return (
            <div>
                <Navbar/>
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <div class="columns is-vcentered">
                            <div class="column is-5">
                                <figure class="image is-4by3">
                                    <img src={this.state.event.cover_pic} alt="Description"/>
                                </figure>
                            </div>
                            <div class="column is-6 is-offset-1">
                                <h1 class="title is-2">
                                    {this.state.event.name}
                                </h1>
                                <h2 class="subtitle is-4">
                                    Venue: {this.state.event.venue}
                                </h2>
                                <h2 class="title is-4">
                                    Date: {this.state.event.date}
                                </h2>
                                <h2 class="subtitle is-4">
                                    {this.state.event.details}
                                </h2>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}

export default EventPage;
