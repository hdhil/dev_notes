import React, { Component } from 'react';
import './Hello.css'


// class Hello extends Component {
// 	render(){
// 		return(
// 			<div className='f1 tc'>
// 				<h1>Hello World!</h1>
// 				<p> {this.props.greeting + " good to see you! Today is "+ this.props.date + "."} </p>
// 			</div>
// 		)
// 	}
// }

//above commented out 'class' code is the same as the below function definition code

const Hello = (props) => {
	return(
		<div className='f1 tc'>
			<h1>Hello World!</h1>
			<p> {props.greeting + " good to see you! Today is "+ props.date + "."} </p>
		</div>
	)
}


export default Hello;
