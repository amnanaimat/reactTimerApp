var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtil = require('react-addons-test-utils');
var Countdown = require('Countdown');

describe('Countdown',()=>{
	it('should Exist',()=>{
		expect(Countdown).toExist();
		
		
	});
	describe('handelSetCountDown',()=>{
		
		it('should set the timer and state',(done)=>{
			var countdown = TestUtil.renderIntoDocument(<Countdown />);
			countdown.handelSetCountDown(10);
			expect(countdown.state.count).toBe(10);
			expect(countdown.state.countDownStatus).toBe("started");
			setTimeout(()=>{
				
				expect(countdown.state.count).toBe(9);
				done();
			},1001);
			
			
		});
		
		it('should not set negative value of timer',(done)=>{
			var countdown = TestUtil.renderIntoDocument(<Countdown />);
			countdown.handelSetCountDown(3);
						setTimeout(()=>{
				
				expect(countdown.state.count).toBe(0);
				done();
			},3001);
			
			
		});
		it('should pause countdown on pause status',(done)=>{
			var countdown = TestUtil.renderIntoDocument(<Countdown />);
			countdown.handelSetCountDown(3);
			countdown.handleChangeStatus('paused');
			
						setTimeout(()=>{
				
				expect(countdown.state.count).toBe(3);
				expect(countdown.state.countDownStatus).toBe('paused');
				done();
			},1001);
			
			
		});
		
		it('should stopped countdown on stopped status',(done)=>{
			var countdown = TestUtil.renderIntoDocument(<Countdown />);
			countdown.handelSetCountDown(3);
			countdown.handleChangeStatus('stopped');
			
						setTimeout(()=>{
				
				expect(countdown.state.count).toBe(0);
				expect(countdown.state.countDownStatus).toBe('stopped');
				done();
			},1001);
			
			
		});
	});
	
});