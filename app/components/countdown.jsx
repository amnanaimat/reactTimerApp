var  React =require('react');
var  Clock =require('Clock');
var CountDownForm = require('CountDownForm');


var Countdown = React.createClass({
	
		getInitialState:function(){
			
			return {
				count:0,
				countDownStatus: 'stopped'
			}
		},
		componentDidUpdate:function(prevProps,prevState){
			if(this.state.countDownStatus !== prevState.countDownStatus){
			switch(this.state.countDownStatus){
			
			case 'started':
			this.startTimer();
			break;
			}
			}
		},
		startTimer: function(){
			
			this.timer = setInterval(()=>{
				var newCount = this.state.count - 1;
				this.setState({
					count : newCount >= 0? newCount:0
				});
				
			},1000)
		},
		handelSetCountDown: function(seconds){
			this.setState({
				count: seconds,
				countDownStatus: 'started'
				});
			
		},
		render:function(){
			var { count } = this.state;
				return (
				<div>
				
				<Clock totalSeconds={count}/>
				
				<CountDownForm onSetCountDown={this.handelSetCountDown}/>
				</div>
		);
}
});
	
module.exports = Countdown;