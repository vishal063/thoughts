import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const firebase =require('firebase');
require('firebase/firestore');
   
  
  firebase.initializeApp( {
    apiKey: "AIzaSyDvFtrTyftpoFImkA0SNMKkt7MDEdQ8U1I",
    authDomain: "evernote-clone-1e352.firebaseapp.com",
    databaseURL: "https://evernote-clone-1e352.firebaseio.com",
    projectId: "evernote-clone-1e352",
    storageBucket: "evernote-clone-1e352.appspot.com",
    messagingSenderId: "811841876322",
    appId: "1:811841876322:web:5fd4e5b295007a1594bc3b",
    measurementId: "G-44ZN6C84QT"
  });
  

ReactDOM.render(
 <div><App/></div>,
    
  document.getElementById('root')
);

 
serviceWorker.unregister();
