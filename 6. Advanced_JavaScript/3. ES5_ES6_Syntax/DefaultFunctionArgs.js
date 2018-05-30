//DEFAULT ARGUMENTS IN FUNCTIONS

	const name = 'Harman';
	const age = 10;
	const pet = 'cat';
	
	//if we don't pass values for the arguments name, age and pet when calling the function, it will pass the default values in bracks to the function
	
	greet = (name='', age=30, pet = 'monkey' ) =>{
		return `Hello ${name} you seem to be ${age} what a lovely ${pet} you have!`;

	}