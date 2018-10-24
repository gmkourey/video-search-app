import React from "react";

const VideoListItem = (props) => {
    var video = props.video;
    var imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item" onClick={() => props.selectedVideo()}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" alt={props.alt} src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="mediaHeading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem;