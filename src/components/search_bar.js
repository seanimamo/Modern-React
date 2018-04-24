//the '{ Component }' is the equivalent of writing
//const Component = React.Component;
import React, { Component } from 'react';

import ReactDOM from 'react-dom';

//es5 class syntax
//This is a class based compnent as opposed to a 
//functional based component.
//**note I dont have to write React.component because 
//of the import React, {Compnent} statement
//You should only use class based components when you
//need to. otherwise just use functional.
class SearchBar extends Component{
    //all javascript classes have a built in constructor function
    constructor(props){
        //super allows us to first run the parent classes constructor function.
        super(props);

        this.state = {term: ''};
    }

   //onChange is a built in React event handler
   //**note that you ONLY change the state using this.setState() because it informs react that the state was changed
    render() {
        return (
            <div>
                <input 
                value={this.state.term}
                onChange={(event)=> this.setState({ term: event.target.value }) }/>  
                Value of the input: {this.state.term}
            </div>
        );
    }

    //**note that we take this function and turn it into 
    //  one line above using an arrow function
    // onInputChange = (event) => {
    //     console.log(event.target.value);
    // }

}



// const SearchBar = () =>{
//     return <input />;
// };


export default SearchBar;


