import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Events from './Pages/Events'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Events/>
        </Route>
      </Switch>
    </div>
    )
}

export default App
