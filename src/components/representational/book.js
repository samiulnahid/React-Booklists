import React from 'react';
import "../../stylesheets/book.css" 

let Book = (props) =>{


    return (

        <div className="book">
            <h2 onClick={props.delete}>Book Name: {props.bookName} </h2>
            <h4>Book Author: {props.bookAuthor}</h4>
            <input type="text" onChange={props.inputName} value={props.bookName}/>
        </div>
    );


}

export default Book;