class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typed: ''
    };
  }
  render() {
    return (
      <div className="search-bar form-inline">  
        <input className="form-control" type="text" onChange={this.onChange.bind(this)}/>
        <button className="btn hidden-sm-down" >
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
  onChange(event) {
    this.setState({typed: event.target.value});
    this.props.delegateMyClick(this.state.typed); 
  }
}

window.Search = Search;
