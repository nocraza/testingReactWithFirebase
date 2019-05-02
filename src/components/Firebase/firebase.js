import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const conf = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
}

class Firebase {
  constructor() {
    app.initializeApp(conf)
    // console.log("API_KEY",process.env.REACT_APP_API_KEY)
    // console.log("API_KEY",process.env.REACT_APP_DATABASE_URL)
    // console.log(process.env.FIREBASE_CONFIG)
    this.auth = app.auth()
    this.db = app.database()


    // console.log(conf.apiKey)
  }

  doCreateUser_EmailPassword = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password)
  
  doSignIn_EmailPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth.signOut() && console.log('Signed out!')

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password)

  user = uid => this.db.ref(`users/${uid}`)

  users = () => this.db.ref('users')
}
  
  // f1.initializeApp(conf);

  export default Firebase
