var React = require('react');
var rb = require("react-bootstrap");
var Button = rb.Button;
var Modal = rb.Modal;
var Nav = rb.Nav;
var NavItem = rb.NavItem;
var Thumbnail = rb.Thumbnail;

var About = React.createClass({
    getInitialState: function(){
        return{
            showModal: false
        };
    },
    close: function(){
        this.setState({ showModal: !this.state.showModal });
    },
    open: function(){
        this.setState({ showModal: !this.state.showModal });
    },
    render: function(){
        return(
        	<Nav pullRight>
                <NavItem eventKey={1} onClick={this.open} >關於這個</NavItem>
	           	<Modal show={this.state.showModal} onHide={this.close}>
	                <Modal.Header closeButton>
	                    <Modal.Title>關於這個東東</Modal.Title>
	                </Modal.Header>
	                <Modal.Body>
	                	<p>☆正在研究React、React-Router、React-Bootstrap、Node.js......東西太多了啦</p>
	                    <h5>使用了這些</h5>
	                    <ul>
	                    	<li>github.com/JerryMobile/Demo-React-Router</li>
	                    	<p>使用了這位大大的React-Router Demo當底來改造的。</p>
	                    	<li>Node.js v5.7.0</li>
	                    	<li>npm 3.6.0</li>
	                    	<li>package.json</li>
	                    	<ul>
								<li>react: "*"</li>
								<li>react-dom: "*"</li>
								<li>react-router: "^0.13.3"</li>
								<li>babelify: "^6.1.3"</li>
								<li>browserify: "^10.2.4"</li>
								<li>react-bootstrap: "^0.28.3"</li>
								<li>watchify: "^3.3.0"</li>
							</ul>
							<li>bootstrap 3.3.6</li>
	                    </ul>
	                    <Thumbnail src="image/pepe.jpg" alt="pepe">
	                    	<h3>Thumbnail label</h3>
	                    	<p>Description</p>
	                    </Thumbnail>
	                </Modal.Body>
	                <Modal.Footer>
	                    <Button onClick={this.close}>關閉</Button>
	                </Modal.Footer>
	            </Modal>
            </Nav>

        )
    }
})

module.exports = About;

