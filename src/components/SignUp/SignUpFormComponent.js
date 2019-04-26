import React, { Component } from 'react'

import { Link, withRouter } from "react-router-dom";

import { compose } from "recompose";

import { FirebaseContext, withFirebase } from "./../Firebase";

import { SIGN_UP, HOME } from "./../../constants/routes";

const SignUpFormComponent = () => {
  return (
    <div>
      <h1>SignUp</h1>
      <SignUpForm />
      
    </div>
  )
}

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: ''
}

class SignUpFormBase extends Component {
  constructor(props){
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = e  => {
    const { username, email, passwordOne } = this.state

    this.props.firebase
      .doCreateUser_EmailPassword(email, passwordOne)
      .then(authUser => {
        this.setState({...INITIAL_STATE})
        this.props.history.push(HOME)
      })
      .catch(error => {
        this.setState({error})
      })

    e.preventDefault();
  } 
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  } 

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state

    const isInvalid = 
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === ''

    return (
      <form
        onSubmit = {this.onSubmit}
      >
        <input 
          name = 'username'
          value = {username}
          onChange = {this.onChange}
          type = 'text'
          placeholder = 'Full Name'
        />

        <input 
          name = 'email'
          value = {email}
          onChange = {this.onChange}
          type = 'email'
          placeholder = 'Email Address'
        />

        <input 
          name = 'passwordOne'
          value = {passwordOne}
          onChange = {this.onChange}
          type = 'password'
          placeholder = 'Password'
        />

        <input 
          name = 'passwordTwo'
          value = {passwordTwo}
          onChange = {this.onChange}
          type = 'password'
          placeholder = 'Confirm Password'
        />

        <button
          type = 'submit'
          disabled = {isInvalid}
        >
          Sign Up
        </button>
  
        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to = {SIGN_UP}>Sign up</Link>
  </p>
)

// const SignUpForm = withRouter(withFirebase(SignUpFormBase))
const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase)


export default SignUpFormComponent

export {SignUpForm, SignUpLink}
