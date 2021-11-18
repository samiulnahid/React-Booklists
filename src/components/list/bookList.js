import React from 'react';
import Book from '../representational/book'


const BookList = (props) =>{
    return (

        props.books.map((book , index) => {

      // console.log(book.bookName);
       return (
         <Book 
            bookName={book.bookName}
            bookAuthor={book.bookAuthor} 
            delete = { () => props.deleteBookState(index)}
            key = {book.id}
            inputName ={(event)=>props.changeWithInputState(event, index)}
        />
       )

    })
    )
}

export default BookList;