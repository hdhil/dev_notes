//COMPOSE: Act of putting two functions together to form a 3rd function where output of one function is input of other

	// EXAMPLE:

	const compose = (f,g) => (a) => f(g(a)); // --> this means that f and g must be FUNCTIONS. function g takes the input (a) and function f takes the input of g(a)

	const sum = (num) => num + 1;

	compose(sum,sum)(5); // --> produces '7'.  
		// --> f(g(5)) --> sum (sum(5)) --> sum (5 + 1) --> sum (6) --> (6 + 1) = 7

