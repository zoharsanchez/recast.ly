class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      allVideos: exampleVideoData,
      called: false
    };
  }

  componentDidMount () {
    window.searchYouTube({}, function (result) {
      var firstVideo = result[0];
      this.setState({ currentVideo: firstVideo });
      this.setState({ allVideos: result });
    }.bind(this));
  }

  fetchYouTube(input) { 
    var that = this;
    debouncedSearchYouTube({key: null, query: input, max: null}, function(result) {
      var firstVideo = result[0];
      that.setState({ currentVideo: firstVideo });
      that.setState({ allVideos: result });
    });  
  }

  onVideoTitleClick (video) {
    this.setState({currentVideo: video});
    console.log('click on title registered', video);
  }

  render () {
    return (
      <div>
        <Nav delegateMyClick={this.fetchYouTube.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/> 
        </div>
        <div className="col-md-5">
          <VideoList delegateMyClick={this.onVideoTitleClick.bind(this)} videos={this.state.allVideos}/>
        </div>
      </div>
    );
  }
}

window.App = App;
