// TODO: answer here
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"

export default function Profile() {
  // TODO: answer here
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  )
}
