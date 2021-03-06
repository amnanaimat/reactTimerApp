var React = require('react');

var CountDownForm = React.createClass({
	onSubmit:function(e){
		e.preventDefault();
		console.log('input count:' + $('input').length);
		
		var strSeconds = this.refs.seconds.value;
		if(strSeconds.length > 0){
		if(strSeconds.match(/^[0-9]*$/)){
			this.props.onSetCountDown(parseInt(strSeconds,10));
			this.refs.seconds.value = "";
			
		}
		}
	},
	render : function(){
		return (
		<div>
		<form ref="form" onSubmit={this.onSubmit} className="countdown-form">
		<input type="text" ref="seconds" placeholder="Enter Time in Seconds" />
		<button className="button expanded">Start</button>
		
		</form>
		</div>
		
		);
	}
	
	
});
module.exports = CountDownForm;