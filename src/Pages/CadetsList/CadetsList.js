import React, { Component } from 'react'
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';

export class CadetsList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cadets: []
        }
    }

    componentDidMount() {
        axios.get(`https://ecell.nitrr.ac.in/events/cadets/?format=json`)
        .then(res => {
          const cadets = res.data;
          console.log(cadets);
          this.setState({ cadets });
        })
    }


    renderTableData() {
        return this.state.cadets.map((cadet, index) => {
           const { id, name, venue, date, time, details, cover_pic, icon, email, flag, year, ecell_user } = cadet 
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{venue}</td>
                 <td>{date}</td>
                 <td>{time}</td>
                 <td>{details}</td>
                 <td><a href={cover_pic}>Cover Picture</a></td>
                 <td><a href={icon}>Icon</a></td>
                 <td>{email}</td>
                 <td>{flag}</td>
                 <td>{year}</td>
                 <td>{ecell_user}</td>
              </tr>
           )
        })
     }
    
    render() {
        if(this.state.cadets.length === 0) {
            return (
                <div class="pageloader is-active"><span class="title">Loading</span></div>
            )
        }

        return (
            <div>
                <Navbar/>
                <div class="container">
                    <table class="table">
                      <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Venue</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Details</th>
                            <th>Cover pic</th>
                            <th>Icon</th>
                            <th>Email</th>
                            <th>Flag</th>
                            <th>Year</th>
                            <th>Ecell User</th>
                        </tr>
                      </thead>
                      <tbody>
                          {this.renderTableData()}
                      </tbody>
                    </table>                
                </div>
            </div>
        )
    }
}

export default CadetsList
