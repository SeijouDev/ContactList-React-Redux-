import React, { Component } from 'react';

class ListItem extends React.Component {
	constructor(props){
		super(props);
		this.state = { name:props.name, phoneNumber: props.phoneNumber};
	}

	
	render(){

		const styleName = {
	  	  color: '#222',
		  fontWeight: 'bold'
		};

		return (
			<li>
				<div style={styleName} > {this.state.name} </div>
				<div style={{ color: '#AAA'}}> {this.state.phoneNumber}</div>
			</li>
		);
	}
}

export default ListItem;


