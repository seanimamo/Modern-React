import React from 'react';
import ReactDOM from 'react-dom';

//**note that when using a class based component,
//  props is an object that can be accessed anywhere.
//  However in a function based component we make it an arguement.
const VideoList = (props) => {
    //**note that we use className instead of class in react
    return(
        <div>
            video list:
            <ul className="col-md-4 list-group">
            {props.videos.length}
            </ul>
        </div>
    );
};

export default VideoList;

