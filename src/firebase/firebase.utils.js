import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
  apiKey: "AIzaSyB-V75KfviougsUK4zhMjxxnRlel-9OnoA",
  authDomain: "crwn-db-44b52.firebaseapp.com",
  projectId: "crwn-db-44b52",
  storageBucket: "crwn-db-44b52.appspot.com",
  messagingSenderId: "731060121249",
  appId: "1:731060121249:web:264879f1ca494d610b4ae0"
}

firebase.initializeApp(config)

export const auth = firebase.auth() 
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({prompt: 'select_account'}) // always trigger Google Pop-up

export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase; // Video #92