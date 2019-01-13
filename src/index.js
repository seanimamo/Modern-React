import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//note that we have to specify which folder to 
//check when importing our own custom files
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//the api key we created at google.developer.console that contains the api key for the youtube data v3 app
const API_KEY = 'PLEASE FETCH A NEW KEY (HIDDEN FOR SECURITY PURPOSES)';

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
    
        //we add the videos value to state which contains the videos that we obtain from YT search
        //we also add another attribute called selectedVideo, which will hold a video object for the currently selected video which is populated in the video_detail component
        //note that video_detail component has a check for if it is not given a video, where it will instead just display a "fetching video data" div instead
        this.state = {
            videos:[],
            selectedVideo: null
        };
        
        //this is our method created to fetch data from the youtube api, it grabs data, then resets the state of <App />. We start it off with searching for surfboards
        this.videoSearch('surfboards');
    }

    //note that we dont assign this to a variable because it is a method defined within our class App
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videoSearchResults)=> {
            //note that we can make YTSearch return something called videos instead and then we can just say this.setState({videos})
            console.log(videoSearchResults);
            this.setState({
                videos:videoSearchResults,
                selectedVideo:videoSearchResults[0]
            });
        });
    }


    // this is the render function which should render our components we created
    // notice how we pass in the video data obtained frrom the parent to the video_list component. This is known as passing props in react
    // notice that we define a function on VideoList called onVideoSelect(video), this function will take the passed in video and set the state of <App />, causing the entire app to rerender.
    // this allows us to have a method to rerender the html with a function call when the user does something such as clicking on a video within the list within the <VideoList /> tag
    
    render(){
        return(
            <div>
                <SearchBar onSearchTermChange={(term) => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                videos={this.state.videos} 
                onVideoSelect={(video) => this.setState({selectedVideo:video})} />
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
ReactDOM.render(<App />, document.querySelector('.container-fluid'));
