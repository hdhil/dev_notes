//VARIABLE ASSIGNMENT: LET + CONST 

	//We no longer have to use 'var' to define varianbles - we use 'const' and 'let'

const player = 'bobby'; //cannot re-assign
let experience = 100; //can re-assign
let wizardLevel = false; //can re-assign

if (experience > 90) {
	let wizardLevel = true;
	console.log('inside',wizardLevel);
}

console.log('outside',wizardLevel);

//let 
	//use let if you want a variable that should change (i.e.,re-assign to it)

//const 
	// does not allow assignment to a constant variable - you are not able to re-assign to this variable. 
	// const does not allow update to a variable! This makes sure the const variable always has same value - reduces bugs.
	// if you have anything that shouldn't change should be  a 'constant' - e.g., a FUNCTION!


//const and objects
	//with below example - you can change the properties of obj but you cannot reassign the obj variable to something else

const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false
}