import React from 'react';
import ReactDOM from 'react-dom';
import VideoListItem from './video_list_item';

//**note that when using a class based component, props is an object that can be accessed anywhere.
//  In a functional based component, if data is passed to it from a parent component, we can access it using the props object, which should get passed in as an arguement.
//  When this component is rendered, it may be empty for a bit, this is because it takes time to fetch the youtube video data and it may not be instant


// using the .map function
// the .map function is a way of iterating over an array and performing some logic on each index
// for example: if we have:
//      var array = [1,2,3];
//      var myArray2 = array.map(function(number){return number*2});
//      console.log(myArray2);
// In this example above, myArray2 is equal to [2,4,6]
// So in the context of React, we can build a list by saying array.map(function(number){return '<div>' + number '</div>'}); and this would build 3 div's with each array item inside



const VideoList = (props) => {
    //**note that we use className instead of class in react

    // Using the map function here, we create an array of <VideListItem /> tags and for each of those object within the props.videos array, we send it to the <VidoListItem /> component to use
    // notice that we also attach an object called key, which contains the etag for each video, which is a unique identifier for that video.
    // The reason we create a unique identifier called key for each array item, is so that if a specific <VideoListItem /> within thearray needs to be modified, we can just modify and rerender that <VideoListItem /> rather than rerendering all of the <VideoListItem />'s within the array.
    const videoItems = props.videos.map((video)=>{
        return(<VideoListItem video={video} key={video.etag}/>);
    });

    return(
        //notice that in JSX we use className to set the name of a class because we want to avoid conflicts with the javascript keyword class
        //Also Notice that we are sending in an array of <VideoListItem> components, which each consist of an <li>somedatahere</li>. React will recognize it is an array of li's and attempt to render all of them
        <div> 
            <ul className="col-md-12 list-group">
                video list: {props.videos.length}
                {videoItems}
            </ul>
        </div>
    );
};

export default VideoList;

