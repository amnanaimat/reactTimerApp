var  React =require('react');
var  Clock =require('Clock');
var CountDownForm = require('CountDownForm');
var Controls = require('Controls');


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
			case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
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
		handleChangeStatus: function(newStatus){
			this.setState({
				countDownStatus: newStatus
			});
		},
		render:function(){
			
			var { count, countDownStatus } = this.state;
			var ShowControls = ()=>{
				 if(countDownStatus !== 'stopped'){
					return <Controls countDownStatus={countDownStatus} OnStatusChange={this.handleChangeStatus}/>
				} else {
					return <CountDownForm onSetCountDown={this.handelSetCountDown}/>
				}
			};
				return (
				<div>
				
				<Clock totalSeconds={count}/>
				
				{ShowControls()}
				</div>
		);
}
});
	
module.exports = Countdown;