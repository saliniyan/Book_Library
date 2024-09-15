import React from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css'
import './Header.css'

function Cart() {
    const location = useLocation();
    const items = location.state?.items || [];

    return (
        <div>
             <h1 className='head'>View Your Cart</h1>
        <div className='book'>
            {items.map((item,index)=>(
                <div key={index} className="booklist">
                    <h3>{item.title}</h3>
                    <img src={item.image} alt={'cover'} />
                    <p>Authors: {item.authors.join(", ")}</p>
                    <p>Publisher: {item.publisher}</p>
                    <p>Published Date: {item.publishedDate}</p>
                    <p>Categories: {item.categories.join(", ")}</p>
                    <p>Description: {item.description}</p>
                    <a href={item.previewLink}>Preview Link</a>
                    <br />
                </div>
            ))
            }
        </div>
        </div>
    );
}

export default Cart;
