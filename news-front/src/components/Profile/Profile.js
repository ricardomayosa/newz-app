import React, { Component } from 'react';

export default class Profile extends Component {
	constructor() {
		super();
		this.state = {
			user: {},
		};
	}
	logout = () => {
		//console.log('Logout')
		localStorage.clear();
		this.props.history.push('/');
	};
	componentWillMount() {
		//console.log(localStorage.getItem('user'))
		if (localStorage.getItem('user') === null) {
            
			this.props.history.push('/');
		} else {
            
			const user = JSON.parse(localStorage.getItem('user'));
            this.setState({ user });
		}
	}

	// handleChange = e => {
	// 	const { user } = this.state;
	// 	let field = e.target.name;
	// 	user[field] = e.target.files ? e.target.files[0] : e.target.value;
	// 	this.setState({ user });
	// 	//console.log(this.state.user);
	// };
	render() {
        const {username, email} = this.state.user;
		return(
            <div>
                HOLA
                <p className='profile-data'>{username}</p>
                <p className='profile-data'>{email}</p>
                <p onClick={this.logout}>Logout</p>
            </div>    
        )
	}
}
