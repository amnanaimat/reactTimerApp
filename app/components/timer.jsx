var  React =require('react');
var  Clock =require('Clock');
var Controls = require('Controls');


var Timer = React.createClass({
	
	getInitialState:function(){
			
			return {
				count:0,
				countDownStatus: 'stopped'
			}
		},
		componentDidUpdate: function(prevProps,prevState){
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
		componentWillUnmount:function(){
			console.log();
			clearInterval(this.timer)
			this.timer = undefined;
			
		},
		startTimer:function(){
			
			this.timer = setInterval(()=>{
				var newCount = this.state.count + 1;
				this.setState({
					count : newCount
				});
				if(newCount == 600){
					this.setState({
						countDownStatus : 'stopped'
					});
				}
				
			},1000)
		},
		handleChangeStatus: function(newStatus){
			this.setState({
				countDownStatus: newStatus
			});
		},
	render : function(){
		var {count, countDownStatus} = this.state;
	return (
			
			<div>
			<h1 className="page-title">Timer</h1>
			<Clock totalSeconds={count}/>
			<Controls countDownStatus={countDownStatus} OnStatusChange={this.handleChangeStatus}/>
			
			</div>
		);
	}
});
module.exports = Timer;