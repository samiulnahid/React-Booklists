import React from 'react';


const BookDetail = props =>{
    console.log(props);

    if(props.book ===null) return <div></div>

    return(

        <div>
            <h1>
                {props.book.bookName}
            </h1>
            <h3>
                {props.book.bookAuthor}
            </h3>
            <p>{props.book.description}</p>

        </div>
    )

}

 export default BookDetail;