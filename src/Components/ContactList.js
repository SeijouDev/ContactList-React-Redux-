import React , { Component } from 'react';
import ListItem from './ListItem.js';

class ContactList extends React.Component {

	render(){

		const contacts = [
			{
				name: "Marlon Castillo",
				phoneNumber: "3108688940"
			},
			{
				name: "Alejandro Preciado",
				phoneNumber: "3108688666"
			},
			{
				name: "SeijouDev",
				phoneNumber: "3108688777"
			}
		];

		const items = contacts.map((c) => 
			<ListItem name={c.name} phoneNumber={c.phoneNumber} />
		);

		return(
			<div>
				<h1>Contact list</h1>
				<ul>{items}</ul>
			</div>			
		);
	}
}

export default ContactList;