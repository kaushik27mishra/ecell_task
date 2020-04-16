import React from 'react'

function EventCards(props) {
    return (
        <div>
            <div class="card">
              {/* <div class="card-image">
                <figure class="image is-is-one-quarter">
                  <img src={props.event.cover_pic} alt="Placeholder image"/>
                </figure>
              </div> */}
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src={props.event.icon_url} alt="Placeholder image"/>
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">{props.event.name}</p>
                    <p class="subtitle is-6">{props.event.venue}</p>
                  </div>
                </div>

                <div class="content" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
                  {props.event.details}
                  <br/>
                  <a href={`mail:to${props.event.email}`}>{props.event.email}</a>
                  <br/>
                  <time datetime={props.event.date}>{props.event.date}</time>
                </div>
              </div>
            </div>
        </div>
    )
}

export default EventCards
