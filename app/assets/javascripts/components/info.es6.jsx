class Info extends React.Component {
  render() {
    let { Title, Year, imdbRating, Director, Actors, Plot, Writer, Rated } = this.props.film;
    return(
      <div className="movie-info">
        <h2>{Title}</h2>
        <p><span>Year:</span> {Year}</p>
        <p><span>Rated:</span> {Rated}</p>
        <p><span>IMDB Rating:</span> {imdbRating}</p>
        <p><span>Director:</span> {Director}</p>
        <p><span>Writer:</span> {Writer}</p>
        <p><span>Actors:</span> {Actors}</p>
        <p><span>Plot:</span> {Plot}</p>
      </div>
    );
  }
}
