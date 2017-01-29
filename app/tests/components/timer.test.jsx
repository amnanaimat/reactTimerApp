var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtil = require('react-addons-test-utils');
var Timer = require('Timer');


describe('Timer',()=>{
	it('should Exist',()=>{
		expect(Timer).toExist();
		
		
	});

	describe('handleChangeStatus',()=>{
		
		it('should start the timer when start button click',(done)=>{
			var timer = TestUtil.renderIntoDocument(<Timer />);
			timer.handleChangeStatus('started');
			expect(timer.state.count).toBe(0);
			
			setTimeout(()=>{
				expect(timer.state.count).toBe(1);
				done();
			},1001);
			
		});
		
		it('should paused the timer on pause status',(done)=>{
			var timer = TestUtil.renderIntoDocument(<Timer />);
			timer.setState({count:10})
			timer.handleChangeStatus('started');
			timer.handleChangeStatus('paused');
			
			setTimeout(()=>{
				expect(timer.state.count).toBe(10);
				done();
			},1001);
			
		});
		it('should stop the timer on stopped status',(done)=>{
			var timer = TestUtil.renderIntoDocument(<Timer />);
			timer.setState({count:10})
			timer.handleChangeStatus('started');
			timer.handleChangeStatus('stopped');
			
			setTimeout(()=>{
				expect(timer.state.count).toBe(0);
				done();
			},1001);
			
		});
		
	});
	});