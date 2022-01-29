import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import {auth} from './firebase';
import {useStateValue} from './components/StateProvider'
import Payment from './components/Payment/Payment'
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './components/Orders/Orders'
import Items from './components/Items/Items'

const promise = loadStripe('pk_test_51KKPQdH7ZwCEXBDQFeXWSJR3OznSyDcbL6qH25tvQ8ngAZdvRhRz6dAYUi3rigXdWW2rGYZZ2ZimD6ZaY4uTmWqj00XHGhmCjB')

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
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/orders'>
            <Orders />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path='/items/:id'>
            <Items />
          </Route>
          <Route path='/payment'>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
