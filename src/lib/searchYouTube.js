var searchYouTube = (options, callback) => {
  var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=';
  var querytemp = '&q=';
  var key = '&type=video&key=';
  // note need to URL encode the query
  // - in case of spaces replace any spaces with `%20`
  options.query = options.query || 'react tutorial';
  options.query = options.query.split(' ')
     .join('%20');
  options.max = options.max || 10;
  options.key = options.key || window.YOUTUBE_API_KEY;
  
  var query = url + options.max + querytemp + options.query + key + options.key;

  $.ajax({
    url: query,
    type: 'GET',
    success: function(data) {
      // console.info('successful youtube get', data.items);
      callback(data.items);
    },
    error: function(e) {
      console.error('Error: ', e);
      callback(e);
    }
  });
};
window.searchYouTube = searchYouTube;
window.debouncedSearchYouTube = _.debounce(window.searchYouTube, 1000);