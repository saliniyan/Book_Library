import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css'
import './Header.css'

function Cart() {
    const location = useLocation();
    const [items,setItems] = useState(location.state?.items || []);

    const remove=(a)=>{
        setItems(items.filter((item) => item.title!==a))
    }

    return (
        <div>
             <h1 className='cart'>View Your Cart</h1>
        <div className='book'>
            {items.map((item,index)=>(
                <div key={index} className="booklist">
                    <h3>{item.title}</h3>
                    <img src={item.image} alt={'cover'}  className='img1'/>
                    <p>Authors: {item.authors.join(", ")}</p>
                    <p>Publisher: {item.publisher}</p>
                    <p>Published Date: {item.publishedDate}</p>
                    <p>Categories: {item.categories.join(", ")}</p>
                    <p>Description: {item.description}</p>
                    <a href={item.previewLink}>Preview Link</a>
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
