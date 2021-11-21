import React, { Component, createRef } from 'react';


class NewBook extends Component {


    ////control component

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         bookName : "",
    //         bookAuthor :"",
    //         description :""
    //     }

    //     this.handleInputChange = this.handleInputChange.bind(this) ///binding kora hoise.. alada alada vabe korar jaigai ak jaigai kora hoise
    //     this.handleSubmit = this.handleSubmit.bind(this)
    // }

    /////uncontrol component

    constructor (props){
        super(props);
        this.bookName = createRef();
        this.bookAuthor = createRef();
        this.description=createRef();
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit = event =>{

        //  console.log(this.state);
        console.log(this.bookName.current.value);
        console.log(this.bookAuthor);
        console.log(this.description);

        event.preventDefault();

    }


    handleInputChange = event =>{
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name,value);

        this.setState({
            [name]:value
        })

    }
 

    render(){

        //  console.log(props);
        return(

            <div>
                <h1>New book entry</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Book Name: </label>
                    <br/>
                    {/* <input type="text" name="bookName" value={this.state.bookName} onChange={(event)=>this.handleInputChange(event)} /> */}
                    {/* <input type="text" name="bookName" value={this.state.bookName} onChange={this.handleInputChange} /> */}

                    {/* unchange component */}
                    <input type="text" name="bookName" ref={this.bookName}/>  

                    <br/>

                    <label>Writer Name: </label>
                    <br/>
                    {/* <input type="text" name="bookAuthor" value={this.state.bookAuthor}  onChange={(event)=>this.handleInputChange(event)}/> */}
                    {/* <input type="text" name="bookAuthor" value={this.state.bookAuthor}  onChange={this.handleInputChange}/> */}

                      {/* unchange component */}
                    <input type="text" name="bookAuthor" ref={this.bookAuthor}/>

                    <br/>

                    <label>Book Description : </label>
                    <br/>
                    {/* <textarea  name="description" value={this.state.description} onChange={(event)=>this.handleInputChange(event)}/> */}
                    {/* <textarea  name="description" value={this.state.description} onChange={this.handleInputChange}/> */}
                      {/* unchange component */}
                    <textarea  name="description" ref={this.description}/>

                    <br/>
                    <input type="submit" value="Submit"/>

                </form>

            </div>
        );

    }

   
}

export default NewBook;