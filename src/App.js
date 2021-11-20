import React from 'react';
// import logo from './logo.svg';
import './App.css';

import MainComponent from './components/mainComponent';
import {BrowserRouter  } from 'react-router-dom';

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

const App = () =>{
  return ( 
    <BrowserRouter>

         <MainComponent />
    
    </BrowserRouter>
 )
}


export default App;
