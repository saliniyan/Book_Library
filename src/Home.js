import React from "react";
import './Home.css'
import axios from "axios";
import { useState } from "react";
import {useNavigate } from "react-router-dom"

function Home(){
    const [books,setBooks]=useState([])
    const [offset,setOffset]=useState(0)
    const [search,setSearch]=useState('Marvel')
    const [item,setItem]=useState([])
    const [message, setMessage] = useState('');

    const fetchbook=async(e)=>
    {
        try{
            if(e){
                e.preventDefault();
            }
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=4&startIndex=${offset}`);            
            setBooks(prevbook=>[...prevbook,...response.data.items])
            setOffset(offset+4)
            console.log('fetched')
        }
        catch{
            console.error("Error in fetching details")
        }
    }

    const handlesearch=(e)=>
    {
        setSearch(e.target.value);
        setOffset(0);
        setBooks([])
    }

    const Additem = (book) => {
        const bookDetails = {
            image: book.volumeInfo.imageLinks?.thumbnail,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            publisher: book.volumeInfo.publisher,
            publishedDate: book.volumeInfo.publishedDate,
            categories: book.volumeInfo.categories,
            description: book.volumeInfo.description ? book.volumeInfo.description.slice(0, 100) : "Description unavailable",
            previewLink: book.volumeInfo.previewLink
        };
    
        setItem((prevItems) => [...prevItems, bookDetails]);
        setMessage("Added Successfully");
        setTimeout(() => setMessage(''), 2500);
    };
    
    const navigate=useNavigate()
    const seecart=()=>{
        navigate('/Cart',{ state: { items: item } })
    }

    return(
        <div>
        <form onSubmit={fetchbook}>
        <div className="first">
            <div>
            <input className="searchbox"
                type="text"
                onChange={handlesearch}
                placeholder="Search here..."
            />
            <button type="submit" className="searchbutton">Search</button>
            </div>
            <img src={"/cart.png"} alt="cart" className="cartimg" onClick={seecart}/>
        </div>
        </form>
        {message && <div className="popmessage">{message}</div>}
        <div className='book'>
            {books.map((book,index)=>(
                <div key={index} className="booklist">
                    <img src={book.volumeInfo.imageLinks?.thumbnail} alt={`${book.volumeInfo.title} cover`} className="img1"/>
                    <h3>{book.volumeInfo.title?book.volumeInfo.title:'Title Unknown'}</h3>
                    <p>{book.volumeInfo.authors?book.volumeInfo.authors:'Authon Unknown'}</p>
                    <p>Publisher: {book.volumeInfo.publisher?book.volumeInfo.publisher:'Publisher Unknown'}</p>
                    <p>Published Date: {book.volumeInfo.publisher?book.volumeInfo.publisher:'Date Unknown'}</p>
                    <p>categories: {book.volumeInfo.publisher?book.volumeInfo.publisher:'categories Unknown'}</p>
                    <p>Book description: {book.volumeInfo.description?book.volumeInfo.description.slice(0,100):"description unavailable"}...</p>
                    <a href={book.volumeInfo.previewLink}>click here</a>
                    <br />
                    <button  onClick={()=>Additem(book)} className="button2">Add to cart</button>
                </div>
            ))
            }
        </div>
        <button onClick={fetchbook} className="button1">Load Books</button>
        </div>
    )
}
export default Home;