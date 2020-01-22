import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase'

const App: React.FC = () => {
  useEffect(() => {
    firebase.firestore().collection('teste').get()
      .then(e => e.forEach(e => {
        if (e.data().hasOwnProperty('path')) {
          console.log(e.data())
          const ref = firebase.firestore().doc(e.data().path)
          firebase.firestore().collection('teste').add({ ref, name: 'agora vai' })
        }
        // const a = await firebase.firestore().doc(e.data().shit.path).get()
        // console.log({ id: e.id, data: firebase.firestore().doc(e.) })
      }))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
