import React from 'react'

import {withAuthorization} from './../Session'

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>
      The Homepage is accessible by all signed in users
    </p>
  </div>
)

const condition = authUser => !!authUser

export default withAuthorization(condition)(HomePage)
