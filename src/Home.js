import React from "react";
import './Home.css'
import axios from "axios";
import { useState } from "react";

function Home(){
    const [books,setbooks]=useState([])
    const [offset,setoffset]=useState(0)

    const a=async()=>
    {
        try{
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=william+shakesphere&maxResults=4&startIndex=${offset}`);            
            setbooks(prevbook=>[...prevbook,...response.data.items])
            setoffset(offset+4)
            console.log('fetched')
        }
        catch{
            console.error("Error in fetching details")
        }
    }
    return(
        <div>
        <h1>Book Libreary App</h1>
        <button onClick={a}>fetch Book</button>
        <div className='book'>
            {books.map((book,index)=>(
                <div key={index} className="booklist">
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={`${book.volumeInfo.title} cover`} />
                    <h3>{book.volumeInfo.title}</h3>
                    <p>{book.volumeInfo.authors}</p>
                    <p>Publisher: {book.volumeInfo.publisher}</p>
                    <p>Published Date: {book.volumeInfo.publishedDate}</p>
                    <a href={book.volumeInfo.previewLink}>click here</a>
                </div>
            ))
            }
        </div>
        </div>
    )
}
export default Home;