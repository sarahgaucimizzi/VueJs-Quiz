import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyA4HvwXuqQT7cly-Tn4tUZoZzY_T0Zwzgo',
    authDomain: 'quiz-46f2c.firebaseapp.com',
    databaseURL: 'https://quiz-46f2c.firebaseio.com',
    projectId: 'quiz-46f2c',
    storageBucket: 'quiz-46f2c.appspot.com',
    messagingSenderId: '773540484667'
  })
}

const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })

export { db }
