//SWITCH STATEMENT

	//good for lots of scenarios instead of using if-else-if statements

	//creates result based on a specific occurrence

	function moveCommand(direction) {
		var whatHappens;
		switch(direction){
			case "forward":
				whatHappens = "you encounter a monster";
				break; //--> break out of switch statement if this case is true
			case "back":
				whatHappens = "you arrived home";
				break; //--> break out of switch statement if this case is true
			case "right":
				whatHappens = "you found a river";
				break;//--> break out of switch statement if this case is true
			case "left":
				whatHappens = "you run into a troll";
				break;//--> break out of switch statement if this case is true
			default:
				whatHappens = "please enter valid direction"
		}
		return whatHappens;
	}
