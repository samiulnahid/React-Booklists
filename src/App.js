import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import Book from './components/book'

// //JSX
// //functional component
// function App() {
//   return (
//     <div className="App">
//       <h1> 
//         HELLO WORLD
//       </h1>
//       <Person/>
//     </div>
//   );
//   // return React.createElement("div",{className:"App"},React.createElement('h1',null,"hello world"), <Person/>);

// }


///class component

class App extends Component{

  ///state

  state = {
    books : [
          {bookName:"Kobor" ,             bookAuthor:"Jossimoddin" },
         { bookName:"gitanjoli" ,         bookAuthor:"Robindronath" },
         { bookName:"Bifdrohi" ,          bookAuthor:"Kazi Nozrul Islam" },
          {bookName:"Hazar bosor dore" ,  bookAuthor:"I don't know" },
          {bookName:"noukadubi" ,         bookAuthor:"Robindronath" }
    ]
  }


  changeBookState = (newBookName) =>{
    // console.log("button clicked");
    //wrong: this.state.books[0].bookName = "1992"

    this.setState({

      books : [
          {bookName: newBookName ,      bookAuthor:"Jossimoddin-change" },
          {bookName:"gitanjoli-cng" ,     bookAuthor:"Robindronath" },
          {bookName:"Bifdrohi-cng" ,      bookAuthor:"Kazi Nozrul Islam" },
          {bookName:"Hazar bosor dore" ,  bookAuthor:"I don't know" },
          {bookName:"noukadubi" ,         bookAuthor:"Robindronath" }
    ]

    });
  }


  changeWithInputState = (event) =>{

    this.setState({

      books : [
          {bookName: event.target.value ,      bookAuthor:"Jossimoddin-change" },
          {bookName:"gitanjoli-cng" ,     bookAuthor:"Robindronath" },
          {bookName:"Bifdrohi-cng" ,      bookAuthor:"Kazi Nozrul Islam" },
          {bookName:"Hazar bosor dore" ,  bookAuthor:"I don't know" },
          {bookName:"noukadubi" ,         bookAuthor:"Robindronath" }
    ]

    });

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

  render(){

    const style = {

      border:"1px solid red",
      borderRadius: "5px",
      backgroundColor:"black",
      color:"white"
    };
  return (
    <div className="App">
      <h1 style={style}>  Book List </h1>

      <button onClick={ () => this.changeBookState("ninetee eighty four")}>Change State</button>

    <input type="text"onChange={this.changeWithInputState}/>
      
      {/* <Book bookName="Kobor" bookAuthor="Jossimoddin" />
      <Book bookName="gitanjoli" bookAuthor="Robindronath" />
      <Book bookName="Bifdrohi" bookAuthor="Kazi Nozrul Islam" />
      <Book bookName="Hazar bosor dore" bookAuthor="I don't know" />
      <Book bookName="noukadubi" bookAuthor="Robindronath" /> */}

      <Book 
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
        change = {this.changeBookState.bind(this,"ninetee 84")} />



    </div>
  );
  }
}


export default App;
