var  React =require('react');



var Controls = React.createClass({
	propTypes: {
		countDownStatus : React.PropTypes.string.isRequired,
		OnStatusChange : React.PropTypes.func.isRequired
	},
	OnStatusChange: function(newStatus){
		return ()=>{
			this.props.OnStatusChange(newStatus);
		}
	},
	componentWillReceiveProps: function(newProps){
		console.log('componentWillReeciveProps');
	},
	render: function(){
		var {countDownStatus} = this.props;
		var renderStartStopButton = ()=>{
			if(countDownStatus == 'started'){
			return	<button className="button secondary" onClick={this.OnStatusChange('paused')}>Pause</button>
			} else if(countDownStatus == 'paused'){
			return	<button className="button primary" onClick={this.OnStatusChange('started')}>Start</button>
				
			}
			
		};
		return(
		<div className="controls">
		{renderStartStopButton()}
		<button className="button alert hollow" onClick={this.OnStatusChange('stopped')}>Clear</button>
		</div>
		);
	},
	
	
	
});
module.exports = Controls;