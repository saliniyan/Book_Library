import React,{useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css'
import './Header.css'

function Cart() {
    const location = useLocation();
    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem('items');
        return storedItems ? JSON.parse(storedItems) : location.state?.items || [];
    });

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    const remove=(a)=>{
        setItems(items.filter((item) => item.title!==a))
    }

    return (
        <div>
             <h1 className='cart'>View Your Cart</h1>
        <div className='book'>
            {items.map((item,index)=>(
                <div key={index} className="booklist">
                    <h3>{item.title || 'Title Unknown'}</h3>
                    <img src={item.image || 'default-image-url.jpg'} alt={`${item.title || 'cover'}`} className='img1'/>
                    <p>Authors: {item.authors?.join(", ") || 'Unknown Author(s)'}</p>
                    <p>Publisher: {item.publisher || 'Unknown Publisher'}</p>
                    <p>Published Date: {item.publishedDate || 'Unknown Date'}</p>
                    <p>Categories: {item.categories?.join(", ") || 'Unknown Categories'}</p>
                    <p>Description: {item.description || 'No description available'}</p>
                    <a href={item.previewLink || '#'}>Preview Link</a>
                    <br />
                    <button onClick={()=>remove(item.title)} className='button2'>Remove book</button>
                </div>
            ))
            }
        </div>
        </div>
    );
}

export default Cart;
