var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
	  e.preventDefault();
	  var Location = this.refs.Location.value;
	  if(Location.length > 0){
		  
		  this.props.onSearch(Location);
		  this.refs.Location.value = "";
	  }
  },
  render: function () {
    return (
      <div>
		<form onSubmit={this.onFormSubmit}>
		<input type="text" placeholder="write something" ref="Location" />
		<button className="button expanded">Get Weather</button>
		</form>
	  </div>
    )
  }
});

module.exports = WeatherForm;
