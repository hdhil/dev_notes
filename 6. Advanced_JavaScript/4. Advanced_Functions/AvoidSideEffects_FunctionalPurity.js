//AVOIDING SIDE-EFFECTS AND FUNCTIONAL PURITY



//EXAMPLE 1: SIDE-EFFECTS WE WANT TO AVOID

	let a = 1; //--> defined funciton using 'let' means it can be changed

	const b = () => {
		a = 2; //--> as we are changing 'a' and not defining it using 'let' or 'const', that means we are affecting the global variable 'a' that was defined outside of this scope THIS IS A SIDE EFFECT
		console.log('printing variable a inside function b():',a);
		return a;
	}

	console.log('running function b():',b()); //--> will run function b() first and print 'printing variable a inside function b():2'.  Then, will console.log'running function b(): 2'
	console.log(a); // --> due to side-effects, we will return '2' here, NOT 1! That means function has interacted with the 'outside world' and has resulted in side effects. Want to avoid this.


//EXAMPLE 2: MAINTAINING FUNCTIONAL PURITY -- THIS EXAMPLE IS GOOD

	let a = 1; //--> defined funciton using 'let' means it can be changed

	const b = () => {
		let a = 2; //--> defining 'a' using 'const or 'let' in function avoids side-effect of interacting with pre-defined 'a' oustide the function
		console.log('printing variable a inside function b():',a)
		// return a;
	}
	console.log('running function b():',b()); //--> will run function b() first and print 'printing variable a inside function b():'2'.  Then, will console.log'running function b()'
	console.log('printing variable a after function b() run:',a); // --> will return '1' and not '2' like above because defining variable inside function avoids side-effect

