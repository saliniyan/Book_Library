import React from "react";
import './Home.css'
import axios from "axios";
import { useState } from "react";

function Home(){
    const [books,setBooks]=useState([])
    const [offset,setOffset]=useState(0)
    const [search,setSearch]=useState('Marvel')

    const fetchbook=async(e)=>
    {
        try{
            e.preventDefault();
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
    }

    return(
        <div>
        <h1>Book Library App</h1>
        <form onSubmit={fetchbook}>
        <div>
            <input className="searchbox"
                type="text"
                onChange={handlesearch}
                placeholder="Search here..."
            />
            <button type="submit" className="searchbutton">Search</button>
        </div>
        </form>
        <div className='book'>
            {books.map((book,index)=>(
                <div key={index} className="booklist">
                    <img src={book.volumeInfo.imageLinks?.thumbnail} alt={`${book.volumeInfo.title} cover`} />
                    <h3>{book.volumeInfo.title}</h3>
                    <p>{book.volumeInfo.authors}</p>
                    <p>Publisher: {book.volumeInfo.publisher}</p>
                    <p>Published Date: {book.volumeInfo.publishedDate}</p>
                    <p>categories: {book.volumeInfo.categories}</p>
                    <p>Book description: {book.volumeInfo.description?book.volumeInfo.description.slice(0,100):"description unavailable"}...</p>
                    <a href={book.volumeInfo.previewLink}>click here</a>
                    
                </div>
            ))
            }
        </div>
        <button onClick={fetchbook} className="button">Load Books</button>
        </div>
    )
}
export default Home;