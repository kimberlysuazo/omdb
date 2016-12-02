class Results extends React.Component {
  

  render() {
    // let { titles } = this.props.results;
    let titles = {
      Search: [
      {
      Title: "The Girl on the Train",
      Year: "2009",
      imdbID: "tt1183672",
      Type: "movie",
      Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0ODUxMjMyMl5BMl5BanBnXkFtZTcwNjg0OTAxMw@@._V1_SX300.jpg"
      },
      {
      Title: "The Girl on the Train",
      Year: "2013",
      imdbID: "tt2387589",
      Type: "movie",
      Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1NTY3ODc2N15BMl5BanBnXkFtZTgwNTAwNjQzMTE@._V1_SX300.jpg"
      },
      {
      Title: "The Girl on the Train",
      Year: "2016",
      imdbID: "tt3631112",
      Type: "movie",
      Poster: "http://ia.media-imdb.com/images/M/MV5BNjc3OTcxNDk5NV5BMl5BanBnXkFtZTgwODUwMTc5OTE@._V1_SX300.jpg"
      },
      {
      Title: "The Girl on the Train",
      Year: "2015",
      imdbID: "tt5896050",
      Type: "movie",
      Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BZTE5MTgyMTAtNzIxZS00Zjc3LWE3NWUtMGUxNzc2MTczYmYxXkEyXkFqcGdeQXVyNDI4NzIzMzY@._V1_SX300.jpg"
      }
      ],
      totalResults: "4",
      Response: "True"
      }
    return (
      <div>
        <h3>Search Results</h3>
        <ul>
          {titles.Search.map((title, i) =>
            <Listing onSetFilm= {this.props.onSetFilm} key={i} titles={title} id={i} />
          )}
        </ul>
      </div>
    );
  }
}
