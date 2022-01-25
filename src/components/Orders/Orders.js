import React, {useState, useEffect} from 'react';
import {db} from '../../firebase'
import './Orders.css'
import Order from '../Order/Order'
import {useStateValue} from '../StateProvider'

function Orders() {
  const [{basket, user}, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
    db.collection('users')
      .doc(user?.uid) // access user collection
      .collection('orders') // access that individual order
      .orderBy('created', 'desc') // order by date created and descending order
      .onSnapshot(snapshot => (
        setOrders(snapshot.docs.map(doc => ({  // map through to array in order to use later 
          id: doc.id,
          data: doc.data() // makes data key for each order item in array
        })))
      ))
    } else {
      setOrders([])
    }
  }, [user]);

  return (
    <div className='orders'>
        <h1>Your Orders History</h1>
        <div className='orders-order'>
          {orders?.map(order => (
            <Order order={order} />
          ))}
        </div>
    </div>
  )
}

export default Orders;
