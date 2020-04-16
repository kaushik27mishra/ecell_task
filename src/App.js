import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Events from './Pages/Events/Events'
import CadetsList from './Pages/CadetsList/CadetsList'
import Main from './Containers/Main'
import EventPage from './Pages/EventPage/EventPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Events}/>
          <Route path={`/event/:id`} component={EventPage}/>
          <Route exact path="/cadet/list" component={CadetsList}/>
        </Switch>
      </BrowserRouter>
    </div>
    )
}

export default App
