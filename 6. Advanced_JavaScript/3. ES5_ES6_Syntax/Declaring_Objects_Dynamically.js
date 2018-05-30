//DECLARING OBJECTS WITH DYNAMIC PROPERTY VALUES

	const name = 'john snow';

	const obj = {
		[name]: 'hello', //--> will create property as john snow: 'hello'
		['ray'+'smith']: 'hihi' //--> will create property as raysmith: 'hihi'
	}

//DECLARING OBJECTS WHERE WE WANT VARIABLE NAME TO BE PROPERTY AND ASSIGNMENT TO BE PROPERTY VALUE

	const a = "Simon";
	const b = true;
	const c = {};

	const obj = {
		a, // --> becomes a: "Simon"
		b, //--> becomes b: true
		c //--> becomes c:{}
	}