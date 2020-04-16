import React from 'react'
import { Link } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

function Navbar() {
  
    return (
        <div style={{paddingBottom:"30px"}}>
            <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
              <div class="navbar-brand">
                <Link class="navbar-item" href="https://ecell.nitrr.ac.in/">
                  <h1 class="title">Ecell Task</h1>
                </Link>

                <Link role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </Link>
              </div>

              <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                  <Link to="/" class="navbar-item">
                    Events
                  </Link>

                  <div class="navbar-item has-dropdown is-hoverable">
                    <Link class="navbar-link">
                      Cadets
                    </Link>

                    <div class="navbar-dropdown">
                      <Link to={'/cadet/list'} class="navbar-item">
                        List
                      </Link>
                      <Link to={'/cadet/register'} class="navbar-item">
                        Register
                      </Link>
                      <Link to={'/cadet/update'} class="navbar-item">
                        Update
                      </Link>
                      <Link to={'/cadet/delete'} class="navbar-item">
                        Delete
                      </Link>
                      <hr class="navbar-divider"/>
                      <Link class="navbar-item">
                        Report an issue
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
        </div>
    )
}

export default Navbar
