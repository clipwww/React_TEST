var React = require('react');
var rb = require("react-bootstrap");
var Grid = rb.Grid;
var Row = rb.Row;
var Col = rb.Col;
var Button = rb.Button;

var Home = React.createClass({
	render: function () {
		return (
			<Grid>
				<h1>Home Page</h1>
				<Row className="show-grid">
					<Col sm={6}>col-sm-6</Col>
					<Col sm={6}>col-sm-6</Col>
				</Row>
			</Grid>
		);
	}
});

module.exports = Home;