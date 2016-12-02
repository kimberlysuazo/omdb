class Info extends React.Component {
  render() {
    let { Title, Year, imdbRating, Director, Actors, Plot, Writer, Rated } = this.props.film;
    return(
      <div className="movie-info">
        <h2>{Title}</h2>
        <p>Year: {Year}</p>
        <p>Rated: {Rated}</p>
        <p>IMDB Rating: {imdbRating}</p>
        <p>Director: {Director}</p>
        <p>Writer: {Writer}</p>
        <p>Actors: {Actors}</p>
        <p>Plot: {Plot}</p>
      </div>
    );
  }
}
