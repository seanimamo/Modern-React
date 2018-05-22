import React from 'react';

//notice that instead of passing in props, we use es6 destructing to pull off the video object from props into an object called video instead
const VideoListItem = ({video, onVideoSelect}) =>{
    //console.log(video);
    const imageURL = video.snippet.thumbnails.high.url;
    
    // when a user clicks on a given video list item, a function called onVideSelect is called with a given video object as its parameter. this function the runs this.setState() on <App /> and sets the selectedVideo property as the passed in video arguement..
    // thus this ultimately rerenders the video_detail component with the video the user clicked on
    return( 
    <li className = "list-group-item" onClick={() => onVideoSelect(video)}>
        <div className="media-left video-item">
            <img clasName="media-object" src={video.snippet.thumbnails.medium.url}/>
        </div>

        <div className="media-body">
            <div className="media-heading">
                {video.snippet.title}
            </div>
        </div>
    </li>
    );

}

export default VideoListItem;