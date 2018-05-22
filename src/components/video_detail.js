import React from 'react';

//notice that instead of passing in props, we use es6 destructing to pull off the video object from props into an object called video instead
const VideoDetail = ({video}) => {
    //since this component will first get rendered before our ajax request to the youtube api will be completed,
    // we make it just return a div that says it is getting the data in the event that it gets rendered without a video object
    if(!video){
        return (<div>Fetching video data...</div>);
    }

    const videoId = video.id.videoId
    const url = `https://www.youtube.com/embed/${videoId}`;
    return(
        <div className ="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>

            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
  
    );
}

export default VideoDetail;