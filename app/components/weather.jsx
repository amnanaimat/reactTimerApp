import React from 'react'
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

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
			isLoading: true
		});
		openWeatherMap.getTemp(Location).then(function(temp){
		that.setState(
		{	Location: Location,
			temp : temp,
			isLoading: false
		});	
		},function(errMesage){
			that.setState(
		{		
			isLoading: false
		});	
			alert(errMesage);
		})
		
		
		
	},
	
	render: function(){
		
		var Location = this.state.Location;
		var temp = this.state.temp;
		var isLoading = this.state.isLoading;
		function renderMessage  (){
			if(isLoading){
				
				return <h3>Fetching Weather</h3>;
			} else if(temp && Location){
				return <WeatherMessage location={Location} temp={temp}/>;
			}
			
		}
		return (
		<div>
			<h3>Weather Component</h3>
			<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
		</div>
		);
	}
	
});
module.exports = Weather;