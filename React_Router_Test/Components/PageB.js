var React = require('react');
var rb = require("react-bootstrap");
var Grid = rb.Grid;
var Row = rb.Row;
var Col = rb.Col;


var PageB = React.createClass({
	render: function () {
		return (
			<Grid>
				<h1>Page B</h1>
				<a href="#Error">不存在的頁面</a><br/>
			</Grid>
			
		);
	}
});

module.exports = PageB;