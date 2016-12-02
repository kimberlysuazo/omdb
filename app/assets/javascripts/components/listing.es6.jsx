class Listing extends React.Component {
  constructor(){
    super();
  this.handleFilmTitleClick = this.handleFilmTitleClick.bind(this);
  }

  
  handleFilmTitleClick(event){
    event.preventDefault();
  
    $.ajax({
      url: $(event.target).attr('href')
    }).done(function(response){
      this.props.onSetFilm(response);
    }.bind(this));
  }

  render() {
    let { Title, Year, imdbID, Poster } = this.props.titles;
    
    if (Poster === "N/A") {
      var poster = "http://www.e-squareindia.com/images/poster-not-available.png"
    } else {
      var poster = Poster;
    }

    var baseUrl = "http://www.omdbapi.com/?i="

    return (
      <li>
          <img className="result-img" src = {poster} />
          <p><a onClick={this.handleFilmTitleClick} className="title-link" href={baseUrl + imdbID} >{Title}</a></p>
          <p>Year: {Year}</p>
      </li>
    );
  }
}
