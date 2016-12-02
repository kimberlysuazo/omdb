class App extends React.Component {
  constructor() {
    super();
    this.state = {
      film: [],
      results: []
    };
     this.handleSearchTitle = this.handleSearchTitle.bind(this);
     this.handleSetFilm = this.handleSetFilm.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: "http://www.omdbapi.com/?t=eternal%20sunshine%20of%20the%20spotless%20mind"
    })
    .done((response) => {
      this.setState({film: response});
    })
  }

  handleSearchTitle(results){
    this.setState({
      results: results
    })
  }

  handleSetFilm(title){
    this.setState({
      film: title
    })
  }

  render(){
    return(
      <div>
        <header id="top-nav">
          <Search onSearchTitle= {this.handleSearchTitle}/>
        </header>

        <section className="container">
          <Results onSetFilm= {this.handleSetFilm}/>
          <hr/>
          <Poster film={this.state.film}/>
          <Info film={this.state.film}/>
        </section>
      </div>
    );
  }

}
