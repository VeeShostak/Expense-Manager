import * as firebase from 'firebase'; // take all exports and toss them on 1 named var

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBA3YQAu0bSZn9I3q0O5OXuWLQPwaqlIqA",
  authDomain: "expense-manager-5de24.firebaseapp.com",
  databaseURL: "https://expense-manager-5de24.firebaseio.com",
  projectId: "expense-manager-5de24",
  storageBucket: "expense-manager-5de24.appspot.com",
  messagingSenderId: "629338267537"
};
firebase.initializeApp(config);

const database = firebase.database();


export {firebase, database as default};



// database.ref().set({
//   name: 'John Smith',
//   age: 23,
//   isSingle: false,
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(()=> {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('failed', e);
// });

// // database.ref('age').set(24);
// // database.ref('location/city').set('New York');


// database.ref('attributes').set({
//   height: 73,
//   weight: 150
// }).then(()=> {
//   console.log('Second set call passed');
// }).catch((e) => {
//   console.log('failed: Second set call failled', e);
// });

// // =====


// database.ref().update({
//   name: 'Mike Doe',
//   'location/city': 'Seattle',
//   job: 'Software Engineer' // created if dne
// });

// // database.ref()
// //   .remove()
// //   .then(() => {
// //     console.log('Data was removed');
// //   }).catch((e) => {
// //     console.log('Did not remove data', e);
// //   });


//   // ===

// // subscirption: give me the value and let me know if those values ever change



// const onValueChange = (snapshot) => {
//   const val = snapshot.val();
// };

// // value: get all the data on the db
// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//   console.log('error: data fetch error message', e)
// });

// database.ref().off(onValueChange); // cancel subscription




// // fetch once
// // database.ref()
// //   .once('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// //   })


// // ===========================


// database.ref('notes').push({
//   title: 'to do',
//   body: 'run 5 miles'
// });

// // notes
// //   -generatedId
// //     -body
// //     -title




// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 976123498763
// });


// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });




// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });