import React from "react";
import PropTypes from "prop-types";
import Timer from "./timer.jsx";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
let sixDig = "";
let fiveDig = "";
let fourDig = "";
let threeDig = "";
let twoDig = "";
let oneDig = "";
let clock = 0;

setInterval(function() {
	let sixDig = Math.floor(clock / 10000);
	let fiveDig = Math.floor(clock / 10000);
	let fourDig = Math.floor(clock / 1000);
	let threeDig = Math.floor(clock / 100);
	let twoDig = Math.floor(clock / 10);
	let oneDig = Math.floor(clock / 1);
	clock++;

	console.log(oneDig);
	console.log(twoDig);
}, 1000);

export class Home extends React.Component {
	render() {
		return (
			<div>
				<Timer
					digOne={oneDig}
					digTwo={twoDig}
					digThree={threeDig}
					digFour={fourDig}
					digFive={fiveDig}
					digSix={sixDig}
				/>
			</div>
		);
	}
}
