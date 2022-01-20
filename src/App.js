import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import {auth} from './firebase';
import {useStateValue} from './components/StateProvider'

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <div className="app">
      <Router>
      <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
