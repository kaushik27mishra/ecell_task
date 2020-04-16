import React from 'react'

function EventPage(props) {
    return (
        <div>
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="columns is-vcentered">
                        <div class="column is-5">
                            <figure class="image is-4by3">
                                <img src={props.event.cover_pic} alt="Description"/>
                            </figure>
                        </div>
                        <div class="column is-6 is-offset-1">
                            <h1 class="title is-2">
                                {props.event.name}
                            </h1>
                            <h2 class="subtitle is-4">
                                {props.event.details_html}
                            </h2>
                            <br/>
                            <p class="has-text-centered">
                                <a class="button is-medium is-info is-outlined">
                                    {props.event.email}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventPage
