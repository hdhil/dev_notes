//3. New Object properties - values and entries

	Object.values
	Object.entries

	//previously we had 
	Object.keys

	//eg

	let obj = {
		username0: 'Santa',
		username1: 'rudolf',
		username2: 'mr.Grinch',
	}

	//this is an ugly object to iterate through
	//used to iterate through this in past using Object.keys (see video)

	//now we can use Object.values and Object.keys

	Object.values(obj).forEach(value =>{
		console.log(value);
	})
		//returns:
			//Santa
			//Rudolf
			//Mr. Grinch

	Object.entries(obj).forEach(value =>{
		console.log(value);
	})
		//returns an array of key and value: and we can use filter, map, reduce array functions
			//["username0", "Sanata"]
			//["username1", "Rudolf"]
			//["username2", "mr. Grinch"]

		//Example of using array functions
		Object.entries(obj).map(value=>{
			return value[1] + value[0].replace('username',''); //--> Creating a new string with Santa0
		})
			//will give us new array: ["Santa0","Rudolf1","mr.Grinch2"]