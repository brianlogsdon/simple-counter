//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

library.add(faClock);
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components

const Timer = props => {
	return (
		<div className="container bg-black">
			<div className="row holder">
				<div className="col digit clock">
					<FontAwesomeIcon icon="clock" />
				</div>
				<div className="col digit sixDigit">{props.digSix % 10}</div>
				<div className="col digit fiveDigit">{props.digFive % 10}</div>
				<div className="col digit fourDigit">{props.digFour % 10}</div>
				<div className="col digit threeDigit">
					{props.digThree % 10}
				</div>
				<div className="col digit twoDigit">{props.digTwo % 10}</div>
				<div className="col digit oneDigit">{props.digOne % 10}</div>
			</div>
		</div>
	);
};

Timer.propTypes = {
	digOne: PropTypes.number,
	digTwo: PropTypes.number,
	digThree: PropTypes.number,
	digFour: PropTypes.number,
	digFive: PropTypes.number,
	digSix: PropTypes.number
};

let clock = 0;
setInterval(function() {
	let sixDig = Math.floor(clock / 10000);
	let fiveDig = Math.floor(clock / 10000);
	let fourDig = Math.floor(clock / 1000);
	let threeDig = Math.floor(clock / 100);
	let twoDig = Math.floor(clock / 10);
	let oneDig = Math.floor(clock);
	clock++;

	ReactDOM.render(
		<Timer
			digOne={oneDig}
			digTwo={twoDig}
			digThree={threeDig}
			digFour={fourDig}
			digFive={fiveDig}
			digSix={sixDig}
		/>,
		document.querySelector("#app")
	);
}, 1000);
//render your react application
