import React from 'react'
import './Checkout.css'
import Subtotal from '../Subtotal/Subtotal'
import {useStateValue} from '../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'

function Checkout() {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout-left'>
                <img className='checkout-ad' src='https://codecanyon.img.customer.envatousercontent.com/files/251497040/preview+graphic.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=33ef954af9ffe668633f9333369d8fbb' alt='' />
                <div>
                    <h3>Hello, {user.email}</h3>
                    <h2 className='checkout-title'>Your Cart!</h2>
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>

            <div className='checkout-right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
