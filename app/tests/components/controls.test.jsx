var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtil = require('react-addons-test-utils');
var Controls = require('Controls');


describe('Controls',()=>{
	it('should exits',()=>{
		
		expect(Controls).toExist();
		
		describe('Controls Button',()=>{
			it('should show Pause Button',()=>{
				var controls = TestUtil.renderIntoDocument(<Controls countDownStatus='started' />);
				var $el = $(ReactDOM.findDOMNode(controls));
				var $pauseControl = $el.find('button:contains(Pause)');
				expect($pauseControl.length).toBe(1);
			});
			it('should show Start Button',()=>{
				var controls = TestUtil.renderIntoDocument(<Controls countDownStatus='paused' />);
				var $el = $(ReactDOM.findDOMNode(controls));
				var $pauseControl = $el.find('button:contains(Start)');
				expect($pauseControl.length).toBe(1);
			});
		});
});
});