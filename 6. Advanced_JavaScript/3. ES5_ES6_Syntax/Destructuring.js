//DESTRUCTURING

	//assume we have object and want to grab properties - we can use destructuring to simplify

const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false
}


	//to access properties without destructuring, we have to assign to variables like this
const player = obj.player;
const experience = obj.experience;
const wizardLevel = obj.wizardLevel;

	//with destructurign we can replace the above with this syntax:

const {player, experience } = obj;
let {wizardLevel} = obj;

	//now we have created variables 'player' and 'experience' and assigned corresponding values from obj
	// now we have created let variable 'wizardlevel' and assigned corresponding value from obj