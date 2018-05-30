//CLOSURES

	// closures means that child scope has access to parent-scope e.g.,
	// a funciton ran (firstFunction) and executed, it will never execute again, but it will remember there are references to those variables
	// therefore childscope always has access to parent scope

//EXAMPLE 1: CHILD SCOPE HAS ACCESS TO PARENT SCOPE

	const firstFunction = () =>{
		const greet = 'Hi'; //--> parent scope
		const secondFunction = () =>{
			console.log(greet); //--> child scope
		}
		return secondFunction(); //-->second function is not run until it is returned (as here) or called (as below)
	}

	const newFunction = firstFunction(); //--> firstFunction called, it defined "greet = Hi", then returns secondFunction (child scope) which has access to firstFunction (parent scope) and console.logs 'hi'
	newFunction(); //--> When newFunction is called, it will console.log 'Hi'


//EXAMPLE 2: PARENTS SCOPE DO NOT HAVE ACCESS TO CHILD SCOPE

	const firstFunction = () =>{
		const greet = 'Hi';
		const secondFunction = () =>{
			const name = "bobby";
			console.log('secondFunction defines name:',name); //--> child funciton has access to 'bobby'
			console.log('secondFunction access to firstFunction:',greet); //--> child funciton has access to 'greet'
		}
		secondFunction(); //-> Second function does not run until it is called (as here) or returned (as above)
		console.log('firstFunction tries to access name defined in secondFunction:',name);//--> no access to 'name' (defined in child scope)
		
	}

	const newFunction = () => firstFunction();
	newFunction(); 
