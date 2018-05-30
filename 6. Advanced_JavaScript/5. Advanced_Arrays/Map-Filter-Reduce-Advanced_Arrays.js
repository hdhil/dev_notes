//Advanced Arrays

const array = [1,2,10,16];

const double = []
const newArray = array.forEach((num) => {
	double.push(num * 2); //need to store in new array "double" otherwise, no change made
});

console.log('ForEach',double);


//Map, Filter, Reduce --> When doing some kind of loop through array, most likely want to use one of these three

//MAP: Map result of operation applied to array1 onto array2 --> map transforms original array and creates a new array

	//Very similar to above example using 'map' function. We can loop over each element and return a new array "mapArray".  ForEach just does actions on array, map creates a new array

const mapArray = array.map((num)=>{
	return num * 2; //always need the return element
});

console.log('map',mapArray);

//Can condense even further:

const mapArray2 = array.map(num => num *2);

//FILTER: Returns a new array based on a conditiion

const filterArray = array.filter(num => num > 5);

console.log('filter',filterArray)

//REDUCE: reduces array down to a single value based on an accumulator

const reduceArray = array.reduce((accumulator, num) => {
	console.log('accumulator',accumulator);
	console.log('num',num);
	return accumulator+num; //accumulator remembers value of result of operation and carries to next array element
}, 0 //starting point of accumulator
);

console.log('reduce',reduceArray);
