import React from 'react';
import './CheckoutProduct.css'
import {useStateValue} from '../StateProvider'

function CheckoutProduct({id, image, title, price, hideButton}) {

  const [{basket}, dispatch] = useStateValue();
  
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }

  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct-image' src={image} />
        <div className='checkoutProduct-info'>
            <p className='checkoutProduct-title'>{title}</p>
            <p className='checkoutProduct-price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            {!hideButton && (
              <button onClick={removeFromBasket}>Remove from Cart</button>
            )}
        </div>
    </div>

  )
}

export default CheckoutProduct;
