import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import axios from 'axios';

export class CadetsRegister extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            details_html: "",
            cover_pic: null,
            icon: null,
            email: "",
            flag: false,
            name: "",
            venue: "",
            date: null,
            time: "",
            details: "",
            year: null,
            ecell_user: null,
            isLoading: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleFileChange = (e) => {
        this.setState({
            [e.target.name] : e.target.files[0]
        })
    }

    handleChangeCheckbox = (e) => {
        this.setState({
            [e.target.name] : e.target.checked
        })
    }

    handleSubmit=(e) => {
        e.preventDefault();
        this.setState({
            isLoading: true
        })

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                // "Access-Control-Allow-Origin": "*",
            }
          };
          

        const data = {
            name: this.state.name,
            venue: this.state.venue,
            date: this.state.date,
            time: this.state.time,
            details: this.state.details,
            details_html: `</div>${this.state.details}</div>`,
            cover_pic: this.state.cover_pic,
            icon: this.state.icon,
            email: this.state.email,
            flag: this.state.flag,
            year: this.state.year,
            ecell_user: 262
        }
        
        
        axios.post(`https://ecell.nitrr.ac.in/events/cadets/`,  data, axiosConfig)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })
    }

    
    render() {

        return (
            <div>
                <Navbar/>
                <div class="container">
                    <form >
                        <div class="field">
                            <label class="label">Name</label>
                            <div class="control">
                              <input class="input" name="name" value={this.state.name} onChange={this.handleChange} type="text" placeholder="Text input"/>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Venue</label>
                            <div class="control">
                              <input class="input" name="venue" value={this.state.venue} onChange={this.handleChange} type="text" placeholder="Text input"/>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Date</label>
                            <div class="control">
                            <input type="date" name="date" value={this.state.date} onChange={this.handleChange} data-display-mode="inline" data-is-range="true" data-close-on-select="false"/>                        
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Time</label>
                            <div class="control">
                                <input type="time" name="time" value={this.state.time} onChange={this.handleChange} data-display-mode="inline" data-is-range="true" data-close-on-select="false"/>                        
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Details</label>
                            <div class="control">
                              <textarea name="details" value={this.state.details} onChange={this.handleChange} class="textarea" placeholder="Textarea"></textarea>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Cover Picture</label>
                            <div class="control">
                                <div class="file has-name">
                                    <label class="file-label">
                                      <input class="file-input" onChange={this.handleFileChange} type="file" name="cover_pic"/>
                                      <span class="file-cta">
                                        <span class="file-icon">
                                          <i class="fas fa-upload"></i>
                                        </span>
                                        <span class="file-label">
                                            {
                                                (this.state.cover_pic === null) ? ("Cover Picture") : ("Change File")
                                            }
                                        </span>
                                      </span>
                                      <span class="file-name">
                                            {
                                                (this.state.cover_pic === null) ? ("File not chosen") : (this.state.cover_pic.name)
                                            }
                                      </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Icon</label>
                            <div class="control">
                                <div class="file has-name">
                                    <label class="file-label">
                                      <input class="file-input" onChange={this.handleFileChange} type="file" name="icon"/>
                                      <span class="file-cta">
                                        <span class="file-icon">
                                          <i class="fas fa-upload"></i>
                                        </span>
                                        <span class="file-label">
                                            {
                                                (this.state.icon === null) ? ("Cover Picture") : ("Change File")
                                            }
                                        </span>
                                      </span>
                                      <span class="file-name">
                                            {
                                                (this.state.icon === null) ? ("File not chosen") : (this.state.icon.name)
                                            }
                                      </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                              <input class="input" name="email" value={this.state.email} onChange={this.handleChange} type="email" placeholder="Text input"/>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Flag</label>
                            <div class="control">
                                <label class="checkbox">
                                    <input type="checkbox" name="flag" value={this.state.flag} onChange={this.handleChangeCheckbox}/>
                                        True
                                </label>    
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Year</label>
                            <div class="control">
                              <div class="select" value={this.state.year} onChange={this.handleChange}>
                                <select name="year">
                                  <option value="2019">2019</option>
                                  <option value="2020">2020</option>
                                  <option value="2021">2021</option>
                                </select>
                              </div>
                            </div>
                        </div>
                        {/* <div class="field">
                            <label class="label">E Cell User</label>
                            <div class="control">
                              <input class="input" name="ecell_user" value={this.state.ecell_user} onChange={this.handleChange} type="number" placeholder="E cell User"/>
                            </div>
                        </div> */}
                        <div class="control">
                            {
                                (this.state.isLoading) ? (<button type="submit" onClick={this.handleSubmit} class="button is-primary is-loading" >Submit</button>) : (<button onClick={this.handleSubmit} type="submit" class="button is-primary" >Submit</button>)
                            }
                        </div>
                    </form>
                    <br/>
                    <br/>
                    <br/>

                </div>
            </div>
        )
    }
}

export default CadetsRegister
