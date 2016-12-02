class Search extends React.Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    var textArea = this.refs.titleSearch.value;
    var textArea2 = this.refs.yearSearch.value;
    var params = {t : textArea, y: textArea2 }
    var baseUrl = "http://www.omdbapi.com/?t=";

    $.ajax({
      url: baseUrl,
      data: $.param(params)
    }).done(function(response){
      this.refs.titleSearch.value = "";
      this.refs.yearSearch.value = "";
      this.props.onSearchTitle(response);
    }.bind(this));
  }

  render(){
    return(
      <div id="brand">
      <h1> Welcome to (NOT) IMDB </h1><p><span className= "title"> </span></p>
      <form id="search-form" onSubmit={this.handleSubmit}>
        <input ref= "titleSearch" id="search" type="text" name="query" placeholder="Search for a Title here:" />
        <input ref= "yearSearch" id="search" type="text" name="query" placeholder="Year (optional)" />
        <input id="button" type="submit" value="Go" />
      </form>
      </div>
    );
  }
}
