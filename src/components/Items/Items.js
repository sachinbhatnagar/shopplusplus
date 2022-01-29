import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Items() {

    const url = 'https://crifshopapi.herokuapp.com/item/';
    const [item, setItem] = useState(null);

    useEffect(() => {
    axios.get(url)
         .then(response => {
            setItem(response.data)
         })
    }, [url])

    if (item) {
        return (
        <div>
            <h1>{item.title}</h1>
            <h2>{item.price}</h2>
            <h3>{item.image}</h3>
        </div>
        )
    }
}
  


export default Items;
