import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Navigation from './../Navigation'
import LandingPage from './../Landing'
import SignUpPage from './../SignUp'
import SignInPage from './../SignIn'
import PasswordForgetPage from './../SignIn'

const App = () => (
    <Router>
        <Navigation />
    </Router>
)

export default App