//DEFINING FUNCTIONS USING ARROW FORMAT

//instead of doing this:

	function add(a,b) {
		return a*b;
	}

//we can now do this:
	
	const add = (a,b) => {
		return a*b;
	}

// if we have a single experssion in the function, we can condense function definition to just one line:

	const add2 = (a,b) => a * b ;