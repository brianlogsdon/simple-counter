import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Timer = props => {
	return (
		<div className="row holder">
			<div className="col digit clock"></div>
			<div className="col digit sixDigit">{props.digSix}</div>
			<div className="col digit fiveDigit">{props.digFive}</div>
			<div className="col digit fourDigit">{props.digFour}</div>
			<div className="col digit threeDigit">{props.digThree}</div>
			<div className="col digit twoDigit">{props.digTwo}</div>
			<div className="col digit oneDigit">{props.digOne}</div>
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

export default Timer;
