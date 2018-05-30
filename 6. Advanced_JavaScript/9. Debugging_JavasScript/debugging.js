//DEBUGGING STRATEGIES

	//complex function example

	const flattened = [[0,1],[2,3],[4,5]].reduce(
		(a,b) =>{ a.concat(b)}, []);

	//step 1: try to make it make more sense by renaming variables

		const flattened = [[0,1],[2,3],[4,5]].reduce(
		(accumulator,array) => {accumulator.concat(array)}, []);

		//break it up and console log

		const flattened = [[0,1],[2,3],[4,5]].reduce(
		(accumulator,array) => 
			console.log('array',array);
			console.log('accumulator',accumulator);
			return accumulator.concat(array), []);		


		//use debugger instead of console.log to walk through the code

		const flattened = [[0,1],[2,3],[4,5]].reduce(
		(accumulator,array) => {
			debugger; //--> stops file and in Chrome will stop where debugger shows up and shows us values of accumulator and array at the time
			return accumulator.concat(array)
		}, []);		
