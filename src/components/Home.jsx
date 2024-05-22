import React from 'react'
import { searchBook } from '../api'
import { useLoaderData } from 'react-router-dom'

export function loader(){
    return searchBook()
}
export default function Home(){
    const searchedTitle = useLoaderData()
    const [bookshelf, setBookShelf] = React.useState([])
    const [book, setBook] = React.useState({
        title: "",
        isbn: "",
        description: "",
        finished: ""
    })
    
    // function showBooks(){
    //     bookshelf.map(book => {
    //         {book.cover}
    //     })
    // }

    return(
        <div>
            <h1>books</h1>
            {searchedTitle}
        </div>
       
    )
}