class Info extends React.Component {
  render() {
    // let { Title, Year, Plot, Director } = this.props.data;
    let titles =
      {
        Title: "Eternal Sunshine of the Spotless Mind",
        Year: "2004",
        Rated: "R",
        Released: "19 Mar 2004",
        Runtime: "108 min",
        Genre: "Drama, Fantasy, Romance",
        Director: "Michel Gondry",
        Writer: "Charlie Kaufman (story), Michel Gondry (story), Pierre Bismuth (story), Charlie Kaufman (screenplay)",
        Actors: "Jim Carrey, Kate Winslet, Gerry Robert Byrne, Elijah Wood",
        Plot: "When their relationship turns sour, a couple undergoes a procedure to have each other erased from their memories. But it is only through the process of loss that they discover what they had to begin with.",
        Language: "English",
        Country: "USA",
        Awards: "Won 1 Oscar. Another 67 wins & 103 nominations.",
        Poster: "http://ia.media-imdb.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX300.jpg",
        Metascore: "89",
        imdbRating: "8.3",
        imdbVotes: "670,502",
        imdbID: "tt0338013",
        Type: "movie",
        Response: "True"
        }

    return(
      <div>
        <h2>{titles.Title}</h2>
        <p>Year: {titles.Year}</p>
        <p>Rating: {titles.imdbRating}</p>
        <p>Director: {titles.Director}</p>
        <p>Actors: {titles.Actors}</p>
        <p>Plot: {titles.Plot}</p>
      </div>
    );
  }
}
