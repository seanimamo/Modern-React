//the '{ Component }' is the equivalent of writing
//const Component = React.Component;
import React, { Component } from 'react';

import ReactDOM from 'react-dom';


// This is a class based compnent as opposed to a functional based component.
// **note I dont have to write React.component because of the import React, {Compnent} statement
// You should only use class based components when you need to. otherwise just use functional.
class SearchBar extends Component{
    //all javascript classes have a built in constructor function
    //all react class components have a value called state. when the state of a component is changed using this.setState, it forces the component to re-render
    //since this component is a searchbar, we add a value to our state object called 'term'
    constructor(props){
        //super allows us to first run the parent classes constructor function.
        super(props);

        this.state = {term: 'Starting Value'};
    }

   // onChange is a built in React event handler
   // **note that you ONLY change the state using this.setState() because it informs react that the state was changed
   // whenever we use an event handler, such as onChange, we handle that event using the event object that gets created.

   // the event object descrbies the context and information about the event that occured. In this case, event.target.value tells us the value after being changed.
   // notice that we use this.setState to change the state.term value to the value of waht was typed into the input html. this forced the component to rerender.

   // Another thing to understand is that when the user types something, they are not changing the value of the input tag, they are calling the onChange function which pulls the value that the user types and sets it to this.state.term, which in turn rerenders the element with the value set to this.state.term
   // Remember, that we define a call to onInputChange as this.onInputChange because it is a method defined within this class
   render() {
        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={(event)=> this.onInputChange(event.target.value) }/>  
            </div>
        );
    }

    //  We would place this in onChange={this.onInputChange in our render function, but since its so simple we just do it inline above}
     onInputChange = (term) => {
        console.log("searchbar input changed to: ",term);
        //this will rerender the searchbar component to contain exactly what the user has inputted
        this.setState({
            term:term
        });
        //next, we reset the state of the <App /> using the passed in function from props so that the video the user searched for is updated
        //Remeber, we define props as this.props
        this.props.onSearchTermChange(term);
    }

}


// functional version of our searchBar component
// const SearchBar = () =>{
//     return <input />;
// };


export default SearchBar;


