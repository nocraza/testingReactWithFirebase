import React, { Component } from "react"
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { SignUpLink } from "./../SignUp";
import { withFirebase } from './../Firebase'

import * as ROUTES from './../../constants/routes'

import { PasswordForgetLink } from "./../PasswordForget";

const SignInPage = () => (
    <div>
        <h1>Sign in</h1>
        <SignInForm/>
        <PasswordForgetLink/>
        <SignUpLink />
    </div>
)

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
}

class SignInFormBase extends Component {
    constructor(props) {
        super(props)

        this.state = { ...INITIAL_STATE}
    }

    onSubmit = e => {
        const { email, password } = this.state

        this.props.firebase
            .doSignIn_EmailPassword(email, password)
            .then(() => {
                this.setState({...INITIAL_STATE})
                this.props.history.push(ROUTES.HOME)
                console.log('Signed In')
            })
            .catch(err => this.setState({err}))

        e.preventDefault()
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

    render(){
        const { email, password, error } = this.state
        const isInvalid = password  === '' || email === ''
        return(
            <form
                onSubmit = { this.onSubmit }
            >
                <input
                    name = 'email'
                    value = {email}
                    onChange = {this.onChange}
                    type = 'text'
                    placeholder = "Email Address"
                />

                <input
                    name = "password"
                    value = {password}
                    onChange = {this.onChange}
                    type = "password"
                    placeholder = "Password"
                />

                <button
                    disabled = {isInvalid}
                    type = "submit"
                >
                    Sign in
                </button>

                {error && <p> {error.message} </p>}
            </form>
        )
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase
)(SignInFormBase)

export default SignInPage

export {SignInForm}