import React, { Component } from 'react'
import Draggable from 'react-draggable'
import Navbar from '../Components/Navbar/Navbar'
import axios from 'axios';
import EventCards from '../Components/EventsCards/EventCards';

export default class Events extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            events : [],
            width: 0, 
            height: 0
        }

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        axios.get(`https://ecell.nitrr.ac.in/events/list/2019/?format=json`)
        .then(res => {
          const events = res.data.data;
          console.log(events);
          this.setState({ events });
        })
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }


    onStart = () => {
        this.setState({activeDrags: ++this.state.activeDrags});
    };
 
    onStop = () => {
        this.setState({activeDrags: --this.state.activeDrags});
    };

    render() {
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        return (
            <div>
                <Navbar/>
                <div class="columns">
                    {this.state.events.map((event,i) => i<4 ? (<div class="column is-one-quarter"><EventCards event={event}/></div>) : null )}
                </div>
                <div class="columns">
                    {this.state.events.map((event,i) => (i>=4 && i<8) ? (<div class="column is-one-quarter"><EventCards event={event}/></div>) : null )}
                </div>
                <div class="columns">
                    {this.state.events.map((event,i) => (i>=8 && i<12) ? (<div class="column is-one-quarter"><EventCards event={event}/></div>) : null )}
                </div>
                <div class="columns">
                    {this.state.events.map((event,i) => (i>=12) ? (<div class="column is-one-quarter"><EventCards event={event}/></div>) : null )}
                </div>
                {/* <Draggable grid={[50, 50]} {...dragHandlers}> */}
                    {/* <div className="box">I snap to a 50 x 50 grid</div> */}
                {/* </Draggable> */}
            </div>
        )
    }
}