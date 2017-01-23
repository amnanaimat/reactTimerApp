import React from 'react'
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModel = require('ErrorModel');

var Weather = React.createClass({
	getInitialState: function(){
		
		return {
			isLoading: false
			}
	},
	handleSearch : function(Location){
		var that = this;
		that.setState(
		{
			isLoading: true,
			errorMessage: undefined,
			location: undefined,
			temp: undefined
		});
		openWeatherMap.getTemp(Location).then(function(temp){
		that.setState(
		{	Location: Location,
			temp : temp,
			isLoading: false
		});	
		},function(e){
			that.setState(
		{		
			isLoading: false,
			errorMessage: e.message
			
		});	
		})
		
		
		
	},
	componentDidMount: function(){
		var location = this.props.location.query.location;
		if(location && location.length > 0){
		this.handleSearch(location);
		window.location.hash = "#/";
		}
		
		
		
	},
	componentWillReceiveProps: function(newProps){
		var location = newProps.location.query.location;
		if(location && location.length > 0){
		this.handleSearch(location);
		window.location.hash = "#/";
		}
	},
	
	render: function(){
		
		var Location = this.state.Location;
		var temp = this.state.temp;
		var isLoading = this.state.isLoading;
		var errorMessage = this.state.errorMessage;
		function renderMessage  (){
			if(isLoading){
				
				return <h3 className="text-center">Fetching Weather</h3>;
			} else if(temp && Location){
				return <WeatherMessage location={Location} temp={temp}/>;
			}
			
		}
		function renderError(){
			if( typeof errorMessage == 'string'){
			return (	<ErrorModel message={errorMessage} />);
			}
			
			
		}
		return (
		<div>
			<h1 className="text-center page-title">Get Weather</h1>
			<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
		</div>
		);
	}
	
});
module.exports = Weather;