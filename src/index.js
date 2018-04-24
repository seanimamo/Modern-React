import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//**note this package hasnt been npm installed yet
//  please do it when we get off the plane 
//import YTSearch from 'youtube-api-search';

//note that we have to specify which folder to 
//check when importing our own custom files
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

//**NOTE: see lecture 12 for youtube api information
const API_KEY = 'put your browser youtube api key here'



//Create a new compnent. This comment should produce
//some HTML.

class App extends Component{
    constructor(props){
        //super allows us to first run the parent classes constructor function.
        super(props);

        this.state = { videos: [] };

        this.state.videos = ['video1','video2','video3','video4','video5'];
        // YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
        //     console.log(videos);
        //     **note that this line is equivalent to this.setState(videos:videos) ,This only works when the key and the value pair are the same word
        //     this.setState(videos);
        // });
    }

    //Notice that we import the video list data as a prop in the jsx tag for VideoList
    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        )
    };

}

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
