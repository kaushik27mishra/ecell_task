import React from 'react'
import logo from "../../assets/index.png";

function Navbar() {
    return (
        <div>
            <nav class="navbar" role="navigation" aria-label="main navigation">
              <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                  <img src={logo} width="50" height="50"/>
                </a>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>

              <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                  <a class="navbar-item">
                    Events
                  </a>

                  {/* <a class="navbar-item">
                    Documentation
                  </a> */}

                  <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                      More
                    </a>

                    <div class="navbar-dropdown">
                      <a class="navbar-item">
                        About
                      </a>
                      <a class="navbar-item">
                        Jobs
                      </a>
                      <a class="navbar-item">
                        Contact
                      </a>
                      <hr class="navbar-divider"/>
                      <a class="navbar-item">
                        Report an issue
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
        </div>
    )
}

export default Navbar
