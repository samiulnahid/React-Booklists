import React , {Component} from 'react';


// let Person = (props)=>{

//     return(
//         <div>
//         <h1>Number : {  Math.floor(Math.random()*500)}</h1>
//         <h2>Name : {props.name} and age : {props.age}</h2>
//         <h4>extra info: {props.children}</h4>

//         </div>
//   )
//   // return React.createElement("div",null,React.createElement('h1',null,"i am person cmponent"));

// }


class Person extends Component{


    constructor(props){
        super(props);
    }


    render(){

        // console.log(this.props);

         return(
                <div>
                <h1>Number : {  Math.floor(Math.random()*500)}</h1>
                <h2>Name : {this.props.name} and age : {this.props.age}</h2>
                <h4>extra info: {this.props.children}</h4>

                </div>
            )
                
    }
}

export default Person;