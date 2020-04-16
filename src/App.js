import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Events from './Pages/Events'
import EventPage from './Pages/EventPage'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Events/>
        </Route>
        <Route exact path="/event:id">
          <EventPage/>
        </Route>
      </Switch>
    </div>
    )
}

export default App
