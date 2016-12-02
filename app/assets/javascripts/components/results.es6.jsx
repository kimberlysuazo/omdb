class Results extends React.Component {
  
  render() {
    
    let results = this.props.results.Search;
    
    return (
      <div className="results">
        <h3>Search Results</h3>
        <ul>
          {results.map((title, i) =>
            <Listing onSetFilm= {this.props.onSetFilm} key={i} titles={title} id={i} />
          )}
        </ul>
      </div>
    );
  }
}
