import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Events from './Pages/Events/Events'
import CadetsList from './Pages/CadetsList/CadetsList'
import EventPage from './Pages/EventPage/EventPage'
import CadetsRegister from './Pages/CadetsRegister/CadetsRegister'
import CadetsUpdate from './Pages/CadetsUpdate/CadetsUpdate'
import CadetsDelete from './Pages/CadetsDelete/CadetsDelete'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Events}/>
          <Route path={`/event/:id`} component={EventPage}/>
          <Route exact path="/cadet/list" component={CadetsList}/>
          <Route exact path="/cadet/register" component={CadetsRegister}/>
          <Route exact path="/cadet/update" component={CadetsUpdate}/>
          <Route exact path="/cadet/delete" component={CadetsDelete}/>
        </Switch>
      </BrowserRouter>
    </div>
    )
}

export default App
