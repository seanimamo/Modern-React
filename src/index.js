import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//note that we have to specify which folder to 
//check when importing our own custom files
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

//the api key we created at google.developer.console that contains the api key for the youtube data v3 app
const API_KEY = 'AIzaSyDKpPFyIqHlCg55mFEJvfK4iVg56BuDgd0';

// React has a concept known as Downwards dataflow. This means only the most parent component should be responsible for fetching data
// so in otherwords, since this index.js is our most parent component, it will be responsible for fetching the data.
// this is how we use the youtube search api to search for data. this returns objects that contain information about videos that match the term we searched by
// YTSearch({key: API_KEY, term: 'surfboards'}, (data)=> {
//     console.log(data);
// });

//this is our <App /> component refactored into a class based component
class App extends Component {

    constructor(props){
        super(props);
    
        //notice we place YTSearch into the constructor because we want to fetch the data before rendering any other objects
        YTSearch({key: API_KEY, term: 'surfboards'}, (videoSearchResults)=> {
            //note that we can make YTSearch return something called videos instead and then we can just say this.setState({videos})
            this.setState( {videos:videoSearchResults} );
        });

        //we add the videos value to state which contains the videos that we obtain from YT search
        this.state = {videos:[]};
    }



    //this is the render function which should render our components we created
    //notice how we pass in the video data obtained frrom the parent to the video_list component. This is known as passing props in react
    render(){
        return(
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    } 
};




// // this is the functional version of our <App /> react tag 
// const App = () => {
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     );
// };




//take this component's generated HTML and put it 
//on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
