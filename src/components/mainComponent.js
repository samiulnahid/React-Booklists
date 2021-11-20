import React, {Component} from 'react';

import BookList from './list/bookList';
import bookList from'../assets/books';
import NewBook from './representational/NewBook';
import BookDetail from './representational/BookDetail'
import {
  BrowserRouter as Router,
  
  Route,
  NavLink,
  Routes,
  Navigate
} from "react-router-dom";



class MainComponent extends Component{
     ///state

  state = {
    books : bookList,
    // showBooks : true
    selectedBook : null
  }



  selectedBookHandler = (bookId) =>{

    const book = this.state.books.filter(book => book.id ===bookId)[0];

    this.setState({
      selectedBook : book
    })

  }



  deleteBookState = (index) =>{

    // const books = this.state.books.slice();
    // const books = this.state.books.map(item => item);
    const books = [...this.state.books];

    // const books = this.state.books;
    books.splice(index,1);
    this.setState({
      books : books
    })

  }

  // changeBookState = (newBookName) =>{
  //   // console.log("button clicked");
  //   //wrong: this.state.books[0].bookName = "1992"

  //   this.setState({

  //     books : [
  //         {bookName: newBookName ,      bookAuthor:"Jossimoddin-change" },
  //         {bookName:"gitanjoli-cng" ,     bookAuthor:"Robindronath" },
  //         {bookName:"Bifdrohi-cng" ,      bookAuthor:"Kazi Nozrul Islam" },
  //         {bookName:"Hazar bosor dore" ,  bookAuthor:"I don't know" },
  //         {bookName:"noukadubi" ,         bookAuthor:"Robindronath" }
  //   ]

  //   });
  // }

  changeWithInputState = (event,index) =>{

    const book = {
      ...this.state.books[index]
    }

    book.bookName = event.target.value;

    const books =[...this.state.books]

    books[index] = book;

    this.setState({ books : books });

  }

  // constructor(){
  //   super();

  //   this.state = {

  //         books : [
  //         {bookName:"Kobor" ,             bookAuthor:"Jossimoddin" },
  //        { bookName:"gitanjoli" ,         bookAuthor:"Robindronath" },
  //        { bookName:"Bifdrohi" ,          bookAuthor:"Kazi Nozrul Islam" },
  //         {bookName:"Hazar bosor dore" ,  bookAuthor:"I don't know" },
  //         {bookName:"noukadubi" ,         bookAuthor:"Robindronath" }
  //   ]

  //   };
  // }


  // toggleBooks = () =>{
  //   this.setState({
  //     showBooks: !this.state.showBooks
  //   });

  // }


  render(){


    // const style = {

    //   border:"1px solid red",
    //   borderRadius: "5px",
    //   backgroundColor:"black",
    //   color:"white"
    // };


    // let books = null;

    // if (this.state.showBooks){
    
      const books = <BookList books = {this.state.books}
      //  deleteBookState = {this.deleteBookState}
       changeWithInputState = {this.changeWithInputState}
       selectedBookHandler = {this.selectedBookHandler}

       />
 
    // }





  return (

   
    
    <div className="App">


  
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink to="/books">Home</NavLink>
        </li>

        <li>
          <NavLink to="/new-book">New Book</NavLink>
        </li>
      </ul>

      </nav>

      {/* <h1 style={style}>  Book List </h1> */}

      {/* <button onClick={this.toggleBooks}>Toggle Books</button> */}

      {/* <button onClick={ () => this.changeBookState("ninetee eighty four")}>Change State</button> */}

    {/* <input type="text"onChange={this.changeWithInputState}/> */}
      
      {/* <Book bookName="Kobor" bookAuthor="Jossimoddin" />
      <Book bookName="gitanjoli" bookAuthor="Robindronath" />
      <Book bookName="Bifdrohi" bookAuthor="Kazi Nozrul Islam" />
      <Book bookName="Hazar bosor dore" bookAuthor="I don't know" />
      <Book bookName="noukadubi" bookAuthor="Robindronath" /> */}

      {/* <Book 
      bookName={this.state.books[0].bookName}
       bookAuthor={this.state.books[0].bookAuthor} 
        inputName ={this.changeWithInputState}
        />
      <Book
       bookName={this.state.books[1].bookName} 
       bookAuthor={this.state.books[1].bookAuthor} 
      
        />
      <Book bookName={this.state.books[2].bookName} bookAuthor={this.state.books[2].bookAuthor}  />
      <Book bookName={this.state.books[3].bookName} bookAuthor={this.state.books[3].bookAuthor}  />
      <Book
       bookName={this.state.books[4].bookName}
        bookAuthor={this.state.books[4].bookAuthor} 
        change = {this.changeBookState.bind(this,"ninetee 84")} /> */}

       <Routes>
       

        {/* {this.state.showBooks ? books : null} */}

       
          <Route  path="/new-book" element={<NewBook/>}/>
            
           <Route  path="/" element={<Navigate to="/books"/>}/>
          <Route  path="/books" element={books}/>
            
         <Route path="/book/:id" element={<BookDetail book={this.state.selectedBook}/>} />
        

       </Routes>

       {/* <BookDetail book={this.state.selectedBook}/> */}

    </div>
   
  );
  }
}

export default MainComponent;