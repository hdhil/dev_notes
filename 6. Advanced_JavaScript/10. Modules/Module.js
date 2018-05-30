//EXPLAINING MODULES

	//When we first started, javascript was inline our HTML

	//We then started linking HTML file to a script file via a 'script tag' (e.g., <script src ='...js'>)
		//this is what we did with Bootstrap and jQuery - loaded up these files using script tags
		//problems iwth script tags:
			//-if we need to add another page, need to copy and paste script tags
			//-lack of dependency resolution - you are responsible to make sure scripts added in proper order
			//-does not solve global name-space problem - all function sin these files are in the window object

	//IIFE - Immediately invvoked function execution
		//this wraps a function in brackets and Javascript says this needs to be evaluated and exceuted
		//brackets at end says run the function after evaluation
		//this was a confusing way to ensure by using this method, we didn't pollute global name space
		//this reduced global name space to just one
		//lack of dependency resolution - still had an issue - order of files is still important! When using 100s of script tags, this is difficult to do

	//Browserify
		//This had someething called Commonjs
		//allowed us to use certain syntax, eg:
			
			//In script file1:
				module.exports = function add(a,b) {
					return a*b;
				}
			
			//In script file 2:
				var add = require("./add");

		//browserify is a module bundler - it reads through all javascript file sand syntax and bundles all into a single file
		//Once you do this, as long as commonjs syntax was used, browserify would konw what to do and would automatically create one file
		//So all our scripts are on one massive file
		//this is what ends up being loaded to server so web app can be deployed
		//this is not how files look when developers working on it

	//EX6 and Webpack -- very useful in REACT
		//All of the above problems was because JavaSript didn't have 'moule system' built into the language
		//with intro of ES6, we can do something nicer

			//javascript file 1:
				export const add = (a,b) => a*b; //--> this allows exporting multiple functions

				//or
				
				export default add () = (a,b) => a*b; //--> allows only one file to be exported

			//javascript file 2:
				
				import {add} from '/.add'// --> this is destructuring, you use this when export file from above has multiple exports
			
				//or
				
				import add from './add' //--> do this if export file above only exports one thing
		
		//Web-pack is a module bundler like Browserify
			//this traverses the dependecy tree (export import tags) into a single file
			//or it can even have multiple files based on needs
			//with webpack you can use ES6 IN ALL BROWSERS!
			//webpack will create one bundle.js file and the main HTML file will point to it via a script tag [need to clarify]
