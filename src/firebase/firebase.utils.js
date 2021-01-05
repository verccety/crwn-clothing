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

export const createUserProfileDocument = async (userAuth, additionalData) => {
 if (!userAuth) return

 const userRef = firestore.doc(`users/${userAuth.uid}`)

 const snapShot = await userRef.get() // через снапшот определяем exists ли объект, snapshot simply represents the data

//если данных о польз. нету, то создаем запись в ДБ
 if (!snapShot.exists) { 
  const {displayName, email} = userAuth
  const createdAt = new Date()

  try {
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    })
  } catch (error) {
    console.log('error creating user', error.message);
  }
 }
 return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth() 
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({prompt: 'select_account'}) // always trigger Google Pop-up

export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase; // Video #92