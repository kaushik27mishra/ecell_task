import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Events from './Pages/Events'
import EventPage from './Pages/EventPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/:id" component={EventPage}/>
          <Route exact path="/" component={Events}/>
        </Switch>
      </BrowserRouter>
    </div>
    )
}

export default App
