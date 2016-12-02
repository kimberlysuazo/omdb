class Listing extends React.Component {
  constructor(){
    super();
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  render() {
    if (this.props.titles.Poster === "N/A") {
      var poster  = "http://www.e-squareindia.com/images/poster-not-available.png"
    } else {
      var poster  = this.props.titles.Poster;
    }

    var base_url = "http://www.omdbapi.com/?i="

    let { Title, Year, imdbID } = this.props.titles;


    return (
      <li>
          <img className="result-img" src = {poster} />
          <p><a className="title-link" href={base_url + imdbID} >{Title}</a></p>
          <p>Year: {Year}</p>
      </li>
    );
  }
}
