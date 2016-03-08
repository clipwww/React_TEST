var React = require("react")
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var Navigation = require('react-router').Navigation;

var rb = require("react-bootstrap");
var Navbar = rb.Navbar;
var Nav = rb.Nav;
var NavItem = rb.NavItem;
var NavDropdown = rb.NavDropdown;
var MenuItem = rb.MenuItem;
var Grid = rb.Grid;
var Jumbotron = rb.Jumbotron;
var Button = rb.Button;
var OverlayTrigger = rb.OverlayTrigger;
var Tooltip = rb.Tooltip;

var About = require("./About");


var NavBar = React.createClass({
    mixins: [Navigation],
    transitionToPageC: function(){
        this.transitionTo('/PageC');
    },
    render: function() {
        var JumStyle ={
            backgroundImage: 'url("image/DSC02437.jpg")',
            color: "black"
        }
        var tooltip = <Tooltip >然而這個按鈕並沒有用</Tooltip>;
    return(
        <div>
            <Navbar inverse fixedTop >
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React Coooooooool</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">首頁</NavItem>            
                        <NavItem eventKey={2} href="#PageB">Page B</NavItem>
                        <NavItem eventKey={3} onClick={this.transitionToPageC}>Page C</NavItem>
                        <NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={4.1}>Action</MenuItem>
                            <MenuItem eventKey={4.2}>Another action</MenuItem>
                            <MenuItem eventKey={4.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={4.3}>Separated link</MenuItem>                   
                        </NavDropdown>
                    </Nav>
                    <About />
                </Navbar.Collapse>
            </Navbar>
            <Jumbotron style={JumStyle}>
                <Grid>
                    <h1>Hello, world！</h1>
                    <p>-放些說明文字（？）</p>
                    <OverlayTrigger placement="right" overlay={tooltip}><Button bsStyle="primary">擺個按鈕</Button></OverlayTrigger>
                </Grid>
            </Jumbotron>
            <RouteHandler />
        </div>
    );
}
});

module.exports = NavBar;