require('normalize.css');
require('styles/App.css');
require('react-bootstrap/lib');

import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import FortuneCookie from '../actions/FortuneCookie';
var cookieTitle = require('../images/chibi_cookie.png');
var brokenCookie = require('../images/chibi_cookie_broken.png');
class AppComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			cookie: props.initCookie,
			broken: 'show',
			fortune: ''
		};
	}
  breakCookie(){
  	  		this.setState({
  		cookie: brokenCookie,
  		broken: 'hidden'
  		// fortune: Math.floor(Math.random() * Object.keys(data).length);
  	});
  	FortuneCookie.getFortunes().then(data =>{
  		let randomMessage = data[ Math.floor(Math.random() * Object.keys(data).length)];
  		this.setState({fortune:  randomMessage.message});
  	});

  }
  render() {
    return (
      <Jumbotron className='text-center'>
      	<div>
        	<h2>Fortune Cookie</h2>
        	<p>
        		<span className={!this.state.broken}>{this.state.fortune}</span>
        		<span className={this.state.broken}>Break the cookie and find out</span>
        	</p>
        	<img className="max-image-size cursor-pointer" src={this.state.cookie} onClick={this.breakCookie.bind(this)}/>
        </div>
        <div>
        </div>
      </Jumbotron>
    );
  }
}

AppComponent.defaultProps = {
	initCookie: cookieTitle
};

export default AppComponent;
