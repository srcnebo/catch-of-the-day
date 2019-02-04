import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCfLhI2UDYPNvvpbpSrLXhDuJFibolqiSw',
  authDomain: 'catch-of-the-day-e45f7.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-e45f7.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
