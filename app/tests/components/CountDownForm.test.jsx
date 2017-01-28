var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtil = require('react-addons-test-utils');
var CountDownForm = require('CountDownForm');


describe('CountDownForm',()=>{
	it('should exits',()=>{
		
		expect(CountDownForm).toExist();
	});
	
	it('should called with valid input field',()=>{
		var spy = expect.createSpy();
		var countDownFrom = TestUtil.renderIntoDocument(<CountDownForm onSetCountDown={spy}/>);
		
		var $el = $(ReactDOM.findDOMNode(countDownFrom));
		countDownFrom.refs.seconds.value = '109';
		TestUtil.Simulate.submit($el.find('form')[0]);
		expect(spy).toHaveBeenCalledWith(109);
	});
	
	it('should not called with invalid input field',()=>{
		var spy = expect.createSpy();
		var countDownFrom = TestUtil.renderIntoDocument(<CountDownForm onSetCountDown={spy}/>);
		
		var $el = $(ReactDOM.findDOMNode(countDownFrom));
		countDownFrom.refs.seconds.value = 'abc';
		TestUtil.Simulate.submit($el.find('form')[0]);
		expect(spy).toNotHaveBeenCalled();
	});
	
	
})
