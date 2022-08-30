import React from 'react';
import './index.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div className='greeting'>
            <button><h1>{greeting}</h1></button>
        </div>
    )
}

export default ItemListContainer;