class App extends React.Component {
  constructor() {
    super();
    this.state = {
      film: [],
      results: [],
      filmSelected: true
    };
     this.handleSearchTitle = this.handleSearchTitle.bind(this);
     this.handleSetFilm = this.handleSetFilm.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: "https://www.omdbapi.com/?t=eternal%20sunshine%20of%20the%20spotless%20mind"
    })
    .done((response) => {
      this.setState({film: response});
    })
  }

  handleSearchTitle(results){
    this.setState({
      results: results,
      filmSelected: false
    })
  }

  handleSetFilm(title){
    this.setState({
      film: title, 
      filmSelected: true
    })
  }

  render(){
    return(
      <div>
        <header id="top-nav">
          <Search onSearchTitle= {this.handleSearchTitle}/>
        </header>

        <section className="container">
          { !this.state.filmSelected ? <Results results= {this.state.results} onSetFilm= {this.handleSetFilm}/> : null }
          { this.state.filmSelected ?  
            <div>
              <hr/>
              <Poster film={this.state.film}/>
              <Info film={this.state.film}/>
            </div>
          : null }
          
        </section>
      </div>
    );
  }

}
