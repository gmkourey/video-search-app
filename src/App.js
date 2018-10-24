//Create a new component. This component should produce some HTML
import React from "react";
import SearchBar from "./components/search_bar";
import VideoDetail from "./components/video_detail";
import VideoList from "./components/video_list";
import YTSearch from "youtube-api-search";

class App extends React.Component {

    state = {
        videos:[],
        selectedVideo: null
    }
    componentDidMount() {
        this.videoSearch("surfing");
    }

    videoSearch(term) {
        YTSearch({key:'AIzaSyC-zg-J0JYavdkcnuS3_gvHjt_aWWBMMbI', term:term}, videos => {
            this.setState({
                videos: videos,
                selectedVideo:videos[0]
            })
        })
    }
    onSearch(event, searchTerm) {
        event.preventDefault();
        this.videoSearch(searchTerm);
    }
    selectedVideo(video) {
        const newVideo = this.state.videos.find((item) => item.id.videoId === video)
        this.setState({selectedVideo:newVideo})
    }

    render() {
    return(
    <div>
    <SearchBar onSearch={(event, searchTerm) => this.onSearch(event, searchTerm)}/>
    <div className="row">
    <VideoDetail video={this.state.selectedVideo}/>
    <VideoList 
        selectedVideo={(selectedVideo) => this.selectedVideo(selectedVideo)}
        videos = {this.state.videos}
    />
    </div>
    </div>
    )
}
}

export default App;