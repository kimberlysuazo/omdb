class Search extends React.Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    var search = this.refs.titleSearch.value;
    var baseUrl = "https://www.omdbapi.com/?s=";

    $.ajax({
      url: baseUrl + search
    }).done(function(response){
      this.refs.titleSearch.value = "";
      this.props.onSearchTitle(response);
    }.bind(this));
  }

  render(){
    return(
      <div id="brand">
      <h1> Open Movie Database Search </h1>
      <form id="search-form" onSubmit={this.handleSubmit}>
        <input ref= "titleSearch" id="search" type="text" name="query" placeholder="
        Enter Film Title Here" />
        <input id="button" type="submit" value="Go" />
      </form>
      </div>
    );
  }
}
