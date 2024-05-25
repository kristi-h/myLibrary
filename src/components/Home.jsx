import React from 'react'
import { getBookCover, searchBook } from '../api.jsx'
import { useLoaderData } from 'react-router-dom'
import { Form, useActionData } from "react-router-dom"


export async function loader({params}){
    return await getBookCover(params)
}

export async function action({request}){
    const formData = await request.formData()
    const title = formData.get("title")
    console.log(title)
    return await searchBook(title)
}

export default function Home(){
    const savedCover = useLoaderData()
    const searchResults = useActionData()
    const [bookshelf, setBookShelf] = React.useState([])
    const [book, setBook] = React.useState({
        title: "",
        isbn: "",
        description: "",
        finished: ""
    })

    return(
        <div>
            <h1>books</h1>
            <Form 
                method="get" 
                className="search-title">
                <input 
                    type="text" 
                    name="title" 
                    placeholder='Lord of the Rings' />
                <button>Search for my book</button>
            </Form>
            <br></br>
            <div>
                {/* {searchResults.map(result=>({
                    <h3>{result.title}</h3>
                    <h5>{result.isbn}</h5>
                    <p>{result.description}</p>
                 }))
                } */}
                {searchResults}

                <img src={searchBook}></img>
            </div>
           
        </div>
       
    )
}