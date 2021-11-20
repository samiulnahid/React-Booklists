import React, { Component } from 'react';
import Book from '../representational/book';
import {Link} from 'react-router-dom';


class BookList extends Component{


  render(){

    console.log(this.props);

    return (

        this.props.books.map((book , index) => {

      // console.log(book.bookName);
       return (

        <Link to={"/book/"+book.id}  key = {book.id} style={{textDecoration: "none", color : "black"}}>
        <Book 
            bookName={book.bookName}
            bookAuthor={book.bookAuthor} 
            // delete = { () => this.props.deleteBookState(index)}
           
            inputName ={(event)=>this.props.changeWithInputState(event, index)}
            selectedBookHandler = {() => this.props.selectedBookHandler(book.id)}
        />
        </Link>
         
       )

    })
    )
  }
}

export default BookList;