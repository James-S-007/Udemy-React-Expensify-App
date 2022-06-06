import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

const app = firebase.initializeApp(firebaseConfig)
const db = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider

export { firebase, googleAuthProvider, db as default }

// const expenses = [{
//     description: 'Rent',
//     amount: 1227,
//     createdAt: 1654282347,
//     note: 'We luvvvv the Mark'
// }, {
//     description: 'Pub subs',
//     amount: 27,
//     createdAt: 1654272347,
//     note: 'Buying wayyy too many of these'
// }, {
//     description: 'Electricity',
//     amount: 85,
//     createdAt: 1654280347,
// }]

// let ids = []
// expenses.forEach((expense) => {
//     ids.push(db.ref('expenses').push(expense))
// })

// console.log(ids)

// db.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses)
// })


// const onValueChange = db.ref().on('value', (snapshot) => {
//     // console.log(snapshot)
//     const data = snapshot.val()
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
// }, (e) => {
//     console.log('Failed to fetch data', e)
// })

// db.ref().off(onValueChange)

// db.ref().set({
//     name: 'James Springer',
//     age: 22,
//     stressLevel: 6,
//     location: 'Atlanta',
//     job: {
//         title: 'SWE',
//         company: 'Google'
//     }
// }).then(() => {
//     console.log('Data saved')
// }).catch((e) => {
//     console.log(`Failed to write with following error: ${e}`)
// })

// // db.ref('age').set(23)
// db.ref('attributes').set({
//     height: "5'11",
//     weight: 165
// })
