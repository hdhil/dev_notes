//ADVANCED OBJECTS
	//Reference type
	//Context
	//Instatiation


//REFERENCE TYPE
	
	//Following helps explain

	[] === []; //-> returns "false"
	[1] === [1]; //-->returns "false"

	var object1 = {value: 10}; //--> creates new object and object1 variable references location
	var object2 = object1; //--> reference object1
	var object3 = {value: 10}; //-->creates a new object and object3 variable references location

	object1 === object2 //--> returns true
	object1 === object3 //--> returns false although both are value 10
	object1.value = 15;
	object2.value //--> returns 15
	object3.value //-->still returns 10

	//what is going on here? -- reference type
		//Objects are reference types in Javascript
		//up until now, all the other types we have learned
		//numbers, strings, booleans, undefined, etc. are all
		//defined by Javascript.  These are considered "primitive"
		//types.  A "reference type" is not defined by programming language
		//they are created by the programmer.

		//So when we create object1, we are just creating a reference
		//to whwere we are storing the context we want (e.g., "box1")
		//object 2 is saying I want whatever is in object1 - which references
		//the location of "box 1"
		//object 3 is creating a new box (e.g., box2) and referencing the locatio of that
		//object.

// CONTEXT
	//context get confused with scope

	//Scope is created when we see { }

	//if we create a function a new "scope" is created

	//e.g./

	function b() {
		let a = 4;
	}

	//so if we referece console.log(a); --> we will get reference error bc doesn't exist outside of the function

	//Context tells you where you are WITHIN THE OBJECT

	console.log(this); //-->referencing the object by saying "this"

	//in chrome console, "this" is the window object and you can access things like:

	this.alert("hello");

	//so "this" means what is the OBJECT ENVIRONMENT THAT WE ARE IN AT THE MOMENT (e.g., what is to the left of the dot)

	function a(){
		console.log(this);
	}

	a(); //--> when we call this function, "this" is still the window

	//In order to reference a different object, we have to do 

	const object4 = {
		a: function() {
			console.log(this);
		}		
	} //--> now when we use "this", it's referencing object4 - i.e., we are WITHIN OBJECT 4 now.

	//tihs is called instantiating

//INSTANTIATING = MULTIPLE COPIES OF A JAVASCRIPT OBJECT

	//If you want to make copies of an object - use classes

	class Player {
		constructor(name, type) { //--> when creating a class, constructor says everytime making copy, first thing that is run is constructor function and that will create name/type
			console.log('player this:' this); //-->just tells us what "this" is for our learning purposes
			this.name = name;
			this.type = type;
		}
		introduce(){ //-->method applied to class player
			console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
		}
	} //anytie to access propety within the constructor we use this.property or method we do this.method

		//Suppose we want to copy Player class but add onto it

	class Wizard extends Player{
		constructor(name,type){
			//anytime we are extending a class, we need to 
			//run super (calling constructor function of Player) and pass properties we want to pass to Player constructor
			super(name,type)
			console.log('player this:', this); //this wouldn't work
		}
		play(){
			console.log(`Weeeee, I'm a ${this.type}!`);
		}
	}


	//this lets us create multiple classes of the same type quickly without doing above over and over again, e.g.
	const wizard1 = new Wizard('shelly','healer'); 
		//-->goes to wizard class when it sees 'new' and says wnat to extend Player
		//-->goes to wizard constructor then sees super which takes us upto Player constructor
		//-->attaches shelly and healer to Player --> at this point, "this" is Wizard object but is empty
		//-->then assigns this.name = name and this.type = type;
		//--> at this point, goes back to Wizard and instantiates object with name and type so 'this' refers to Wizard object with name and type info
	const wizard1 = new Wizard('shawn','dark magic');
