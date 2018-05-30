//DATA STRUCTURES: OBJECTS - INTRODUCTION

//Objects are collections of properties

	//example - writing an object:
		// property: value

	var user = {
		name: "john",
		age: 34,
		hobby: "soccer",
		isMarried: false
	};

	// Object vs. Array

	var list = ["apple","banana","orange"];

	//Object is more dynamic - it has properties and values
	// with an array - you have indexing 0,1,2...etc. with corresponding values

//GRAB A PROPERTY
	
	// with an array

	list[1] //--> would give banana

	//wth object
	user.name; //-> john
	user.age; //--> 34
	user.hobby;//-->soccer
	user.isMarried; //--> false

//CHANGING/ADDING PROPERTIES TO OBJECT

	user.favouriteFood = "spinache" //-> just gets expanded to user object
	user.isMarried = true; //--> updates user object

//YOU CAN HAVE ARRAYS INSIDE OBJECTS

	var user = {
		name: "john",
		age: 34,
		hobby: "soccer",
		isMarried: false,
		spells: ["abrakadabra", "shazam","boo"]
	};

		//how to access

		user.spells[1] //-->will give shazam


//YOU CAN OBJECTS INSIDE AN ARRAY 
	//- e.g., let's say we want list of all of our users

	var list2 = [
		{
			username: "andy",
			password: "secre",
		},
		{
			username: "jess",
			password: "123"
		}
		}];

		//how to access

		list[0].password //--> gives andy's pw

//WHAT IF WE WANTED TO GIVE USER A SPECIFIC ACTION (METHOD)?

	//Adding a function inside an object = METHOD

	var user = {
		name: "john",
		age: 34,
		hobby: "soccer",
		isMarried: false,
		spells: ["abrakadabra", "shazam","boo"],
		shout: function() {
			console.log("AHHHHHHH!");
		}
	};

	//calling function: user.shout() --> this is a method
	//this is similar to array: e.g., list.pop() --> method
	//console.log() --> also a method. Console is an object that has 
		//many methods on it.

	//CAN YOU HAVE AN EMPTY OBJECT?
		//yes

		user3 = {}; 

		//you can also have empty list
		list2 = [];

		//but you cannot access anything in the above

	// NULL

		//special type that just says that an object is 'null'

		user4 = null; //--> this returns 'null'. special character
					//--> for a null object you CANNOT SET a property 
						//- e.g., user4.name="Andy" cannot do
		user3 //--> from above, would give you "undefined"