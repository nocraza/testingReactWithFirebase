import React from 'react'
import { FirebaseContext } from "./../Firebase";

const TestComponent1 = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return <div>try lng if firebase connected na</div>
        }}

    </FirebaseContext.Consumer>
//   return (
//     <div>
      
//     </div>
//   )
)

export default TestComponent1
