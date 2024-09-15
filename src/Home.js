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
            const response = await axios.get(`https://openlibrary.org/search.json?q=${'harry_potter'}&limit=4&offset=${offset}`)
            setbooks(prevbook=>[...prevbook,...response.data.docs])
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
                <div key={index}>
                    <h2>{book.title}</h2>
                    <p>{book.author_name}</p>
                </div>
            ))
            }
        </div>
        </div>
    )
}
export default Home;