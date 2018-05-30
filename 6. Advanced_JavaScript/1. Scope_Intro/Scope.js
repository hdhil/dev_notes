//SCOPE

	//See scope file in Advanced Functions for more discussion

	//Scope means variable access
	//i.e., what variabels do I have access to when code is running?

	//by default ,we are in root scope - e.g., window object in chrome

		function aa(){
			console.log("test1");	
		}

		window.aa() //--> aa() is now part of window scope. this is the parent/root scope.

	function bb (){
		var a = "hello";
	}


		console.log(a); //-->would give us an error b/c only exists within function
						//-->only way to make it work would be to add it inside the function
