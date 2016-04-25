import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

var _ = require('lodash');
var classNames = require('classnames');
var moment = require('moment');

class HomePage extends Component {
	render() {
		return (
			<div className="page home">
				Welcome to the project.
			</div>
		);
	}
}

HomePage.propTypes = {
};

export default connect(
	(state) => {
		return {};
	}
)(HomePage);
