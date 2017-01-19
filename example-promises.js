function addPromise (a,b){
	
	
	return new Promise(function(resolve,reject){
		
		if((typeof a === 'number')&& (typeof b === 'number')){
			resolve(a+b);
			
		} else {
			reject("Error Message: Argument A & B Should be number");
		}
		
	});
}

addPromise("amna",3).then(function(result){
	
	console.log("sum Of numbers are:" + result);
},function(err){
	
	console.log(err);
});