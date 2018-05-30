//2. Trailing commas in functions, parameter lists and calls

		const fun = (a,b,c,d,) => {
			console.log(a);
		}

		//can run this as

		fun(1,2,3,4,)

		//why is this comma at the end of d and 4 useful? Just syntactic - helps with git-hub, etc.
