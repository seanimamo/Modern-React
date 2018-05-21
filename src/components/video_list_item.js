import React from 'react';

const VideoListItem = (props) =>{
    console.log(props);
    var style1={
        padding: "40px",
        color:"black",
        width:"100vw",
        border:"5px solid black"
    }
    var style2={
        whitespace:"no-wrap"
    }
    return(
    <div className="jumbotron">
        <h1 style={style2}>{props.video.snippet.title}</h1>   
        <li>
            <img src={props.video.snippet.thumbnails.high.url} alt="Video Thumbnail" height="60%" width="100%" />
        </li>
    </div>
    );

}

export default VideoListItem;