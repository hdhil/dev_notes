//CURRYING: TAKING FUNCTIONS THAT TAKE MULTIPLE ARGUMENTS AND CONVERTING THEM TO TAKE FUNCTIONS ONE AT A TIME

//EXAMPLE 1:

const multiply = (a,b) => a * b;

	//convert to currying

	const curriedMultiply = (a) => (b) => a *b; 

	//breaking up the above functions lets us do things like

	const multiplybyten = curriedMultiply(10);

	multiplybyten(2); //--> will return 20 i.e., multiplybyten(2) --> curriedMultiply(2)(10) --> (2 * 10) = 20