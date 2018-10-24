import React from "react";

class VideoDetail extends React.Component {

    state = {
        title: "",
        description: ""
    }

    render () {
        let video = this.props.video;

        if(video == null) {
            return <div>Video is not available</div>
        }

        var url="https://www.youtube.com/embed/" + video.id.videoId;

        return (
            <div className="col-md-8 video-detail">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="videoDetail" className="embed-repsponsive-item" src={url}/>
                </div>
                <div className="detail">
                <div><strong>{video.snippet.title}</strong></div>
                <div>{video.snippet.description}</div>
                </div>
            </div>
        )
    }
}

export default VideoDetail;