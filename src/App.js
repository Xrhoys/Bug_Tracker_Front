import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
import Home from './pages/home'
import Main from './pages/main'
import stores from './app/store'
import { autoConnect } from './app/user'

/**
 * Call init store steps, for now only autoConnect
 */
stores.dispatch(autoConnect())

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
