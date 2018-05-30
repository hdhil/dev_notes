//import { without } from 'lodash';
	//'Import' syntax is the latest version of ES6 -- so cannot use this without web-pack fix (we'll see later how to do that). For now, instlal browserify and use the require syntax

//using require syntax and Browserify instead
	//after instlaling browserify through npm, this is how you use require syntax.  In order for all this to work though, need to run browserify and create a bundle.js file, which will replace the script.js file

var _= require('lodash'); 

var button = document.getElementById('enter');
var ul = document.querySelector('ul');

button.addEventListener("click", function(){
	var li = document.createElement("li");
	ul.appendChild(li);
 }
)
