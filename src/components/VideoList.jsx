var VideoList = (props) => (
  <div className="video-list media">
    {props.videos.map((video, i) => 
      <VideoListEntry delegateMyClick={props.delegateMyClick} key={i} video={video} />
    )}
  </div>
);
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};
window.VideoList = VideoList;
