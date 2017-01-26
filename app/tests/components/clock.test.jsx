var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtil = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock',()=>{
	it('should exits',()=>{
		
		expect(Clock).toExist();
	});
	
	
});
describe('render',()=>{
	it('should render clock',()=>{
		var clock = TestUtil.renderIntoDocument(<Clock totalSeconds={65} />);
		var $el = $(ReactDOM.findDOMNode(clock));
		var actualText = $el.find('.clock-text').text();
		expect(actualText).toBe('01:05');
		
	});
	
	
});

describe('Seconds Format',()=>{
	it('should Format seconds when min/sec less then 10',()=>{
		var clock = TestUtil.renderIntoDocument(<Clock />);
		var seconds = 61;
		var expected = "01:01";
		var actual = clock.formatSecond(seconds);
		
		expect(actual).toBe(expected);
	});
	
	it('should Format seconds when min/sec less then 10',()=>{
		var clock = TestUtil.renderIntoDocument(<Clock />);
		var seconds = 620;
		var expected = "10:20";
		var actual = clock.formatSecond(seconds);
		
		expect(actual).toBe(expected);
	});
	
	
});


