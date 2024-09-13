import React from "react";
import './Home.css'
import axios from "axios";

function Home(){
    const a=async()=>
    {
        try{
            const books = await axios.get(`https://openlibrary.org/search.json?q=${'harry_potter'}&limit=4`)
            console.log('fetched')
        }
        catch{
            console.error("Error in fetching details")
        }
    }
    return(
        <div>
        <h1>Book Libreary App</h1>
        <div class='book'>
            
        </div>
        </div>
    )
}
export default Home;