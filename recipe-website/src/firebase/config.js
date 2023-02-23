import firebase from 'firebase/app'
import 'firebase/firestore'

//from firebase
const firebaseConfig = {
    apiKey: "AIzaSyBNzMF5K5i6ZelFPHlb1Ynaht7TX_LVBYM",
    authDomain: "recipe-website-80dbd.firebaseapp.com",
    projectId: "recipe-website-80dbd",
    storageBucket: "recipe-website-80dbd.appspot.com",
    messagingSenderId: "908415529361",
    appId: "1:908415529361:web:eb43f6304f2e086d066a30"
}


//initialise firebase
firebase.initializeApp(firebaseConfig)


//initialise services (firestore)
const projectFirestore = firebase.firestore()


//export to be used in other locations within the project
export {projectFirestore}