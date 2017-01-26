var React = require('react');

var Clock = React.createClass({
	getDefaultProps :function(){
		return {
			totalSeconds : 0
		}
	},
	propTypes :{
		totalSeconds : React.PropTypes.number
	},
	formatSecond: function(totalSeconds){
		var minutes  = Math.floor(totalSeconds/60);
		var seconds = totalSeconds%60;
		if(minutes < 10){
			minutes = "0" + minutes;
		}
		if(seconds < 10){
			seconds = "0" + seconds;
		}
		return minutes + ":" + seconds;
		
	},
	render: function(){
		var {totalSeconds} = this.props;
		return(
		<div className="clock">
		<span className="clock-text">
		{this.formatSecond(totalSeconds)}
		</span>
		</div>
		);
		
		
	}
	
	
});
module.exports = Clock;

