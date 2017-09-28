import React from 'react';
import ReactDOM from 'react-dom';//use ReactDOM to rendor to the DOM
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyC95vdwBN-VlJZr0x5pqYIpnCgdQxd1ruE";
//do a youtube-api-search


YTSearch({key: API_KEY, term: "surfboards"}, function(data){
  console.log(data);
});

//create a new component. this component should produce
//some html
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedVideo: null, videos:[] };
    this.videoSearch('surfboards')
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        selectedVideo: videos[0],
        videos: videos
      });


    });
  }

  render() {
    return (
      <div>
        <div>
            <SearchBar onSearchTermChange={(term)=>this.videoSearch(term)}/>
        </div>
        <div>
            <VideoDetail video={this.state.selectedVideo}/>
        </div>
        <div>
            <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos} />
        </div>
        <div>

        </div>
      </div>);
  }
}

// Fat arrow is identical to function()
//const App = () => {
//  return <div>Hi!</div>
//}



//Take this component's generated HTML and put it on the page (in the DOM)
//React.render(App); - React is not defined. We installed react when we did `npm install`
//React.render(App); - React.render is depreciated
//ReactDOM.render(); - make an instance of the component first

//<App />; //self closing tag. Creates an instance.
//ReactDOM.render(<App />); - doesn't say where to put the element on the page

ReactDOM.render(<App />, document.querySelector('.container'));
