class Poster extends React.Component {
  constructor(){
    super();
  }

  render() {
    if (this.props.film.Poster === "N/A") {
      var poster  = "http://www.e-squareindia.com/images/poster-not-available.png"
    } else {
      var poster  = this.props.film.Poster;
    }

    return(
      <div className= "picture">
        <img src = {poster} />
      </div>
    );
  }
}
