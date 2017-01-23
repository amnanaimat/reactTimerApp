var React = require('react');


var WeatherMessage = (props)=>{
	
	return (
      <div>
		<h4 className="text-center">Its {props.temp} here in {props.location}</h4>
	  </div>
    )
	
}

module.exports = WeatherMessage;
