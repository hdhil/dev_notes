//SCOPE AND VARIABLE ACESS

//EXAMPLE 1: If variable defined outside of funciton is assigned inside function using 'const' or 'let', then new assignment will work within function 

		const greeting = "hello"; //global variable assignment

		const greet = () => {
			const greeting = "hi"; // --> defined with const, therefore, will not assum ei tis global variable
			return greeting;
		}

		console.log('greet():',greet()); //--> will console.log "hi"
		console.log('greeting:',greeting); // --> will console.log "hello"


//EXAMPLE 2: If variable defined outside of function is assigned value without defining with 'const' or 'let', then function assumes it is a global variable and will return error

		const greeting = "hello"; //--> global variable assignment

		const greet = () => {
			greeting = "hi"; // --> not defined using const or let, therefore assume it is referring to original definition of 'greeting', which is a const, therefore have error
			return greeting;
		}



//EXAMPLE 3: console.log function will show up as undefined UNLESS function RETURNS something

		const greet = () => {
			greeting = "hi"; // --> not defined using const or let, therefore assume it is global variable
			//return greeting; --> commented out return
		}

		console.log('greet():',greet()); //--> will console.log "undefined" because nothing was returned from function
		console.log('greeting:',greeting); // --> will console.log "hi" (function variable accessible even once function execution is complete)


//EXAMPLE 4: console.log function will show up as undefined UNLESS function RETURNS something

		const greet = () => {
			const greeting = "hi"; // --> defined using const - therefore accessible within function only
			return greeting;
		}

		console.log('greet():',greet()); //--> will console.log "hi" 
		console.log('greeting:',greeting); // --> will show error because greeting defined within function using 'const' and therefore not accessible outside of function