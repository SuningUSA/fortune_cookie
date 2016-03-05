require('normalize.css');
require('styles/App.css');
require('react-bootstrap/lib');

import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import FortuneCookie from '../actions/FortuneCookie';
var cookieTitle = require('../images/chibi_cookie.png');
var brokenCookie = require('../images/chibi_cookie_broken.png');
var initialState= {
			cookie: cookieTitle,
			broken: 'show',
			unbroken: 'hidden',
			fortune: ''
};
var activeState = {
  		cookie: brokenCookie,
  		broken: 'hidden',
  		unbroken: 'show'
};

class AppComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = initialState;
	}
  breakCookie(){
  	  		this.setState(activeState);
  	FortuneCookie.getFortunes().then(data =>{
  		let randomMessage = data[ Math.floor(Math.random() * Object.keys(data).length)];
  		this.setState({fortune:  randomMessage.message});
  	});

  }
  reset(){
  	this.setState(initialState);
  }
  render() {
    return (
    <div>
      	<Jumbotron className='text-center'>
      		<div>
        		<h2>Fortune Cookie</h2>
        		<small>Presented by: Cloud Lab</small>
        		<h3 className='{this.state.unbroken} cookie-fortune'>{this.state.fortune}</h3>
        		<p>
        			<span className={this.state.broken}>Break the cookie and find out</span>
        		</p>
        			<img className="max-image-size cursor-pointer" src={this.state.cookie} onClick={this.breakCookie.bind(this)}/>
        		<p>
        			<a href='#' className={this.state.unbroken} onClick={this.reset.bind(this)}>Try Another</a>
        		</p>
        	</div>
      	</Jumbotron>
      	<div className='footer'>
      		<span>
      			Suning USA ©2016
      		</span>
      		<span className='pull-right'>
      			845 Page Mill RD, CA 94304
      		</span>
      	</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
