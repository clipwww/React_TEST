var React = require('react');
var rb = require("react-bootstrap");
var Grid = rb.Grid;
var Row = rb.Row;
var Col = rb.Col;
var Image = rb.Image;

var NotFound = React.createClass({
	render: function () {
		var middleStyle={
			textAlign: "center" 
		}
		return (
			<Grid>
				<Row>
					<Col xs={12} style={middleStyle}>
						<h1>Not Found This Page！</h1>
						<Image src="image/hjs93j062.png" alt="粗乃玩" />
					</Col>
				</Row>
			</Grid>
		);
	}
});

module.exports = NotFound;