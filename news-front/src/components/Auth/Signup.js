import React, { Component } from 'react';
import { signup } from '../../authService';
import { Link } from 'react-router-dom';

export default class Signup extends Component {
	constructor() {
		super();
		this.state = {
			user: {
				username: '',
				password: '',
				confirmPassword: '',
			},
		};
	}
	handleChange = e => {
		const { user } = this.state;
		let field = e.target.name;
		user[field] = e.target.value;
		this.setState({ user });
		console.log(this.state);
	};

	handleSubmit = e => {
		e.preventDefault();
		signup(this.state.user, this.props.history);
	};
	render() {
		return (
			<div>
				{/* check if user is logged */}
				<div className="card text-center">
					<div className="card-body">
						<h5 className="card-title">Signup</h5>

						<form
							className="text-left"
							onSubmit={this.handleSubmit}
						>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">
									Username
								</label>
                                <input
									type="text"
									className="form-control"
									id="signupUsername"
									aria-describedby="signupUsername"
									name="username"
									onChange={this.handleChange}
								/>
							</div>
                            <div className="form-group">
								<label htmlFor="exampleInputEmail1">
									Email
								</label>
                                <input
									type="email"
									className="form-control"
									id="signupEmail"
									aria-describedby="signupEmail"
									name="email"
									onChange={this.handleChange}
								/>
							</div>
                            <div className="form-group">
								<label htmlFor="exampleInputEmail1">
									Password
								</label>
                                <input
									type="password"
									className="form-control"
									id="signupPass"
									aria-describedby="signupPass"
									name="password"
									onChange={this.handleChange}
								/>
							</div>
                            <div className="form-group">
								<label htmlFor="exampleInputEmail1">
									Confirm password
								</label>
                                <input
									type="password"
									className="form-control"
									id="signupPassConf"
									aria-describedby="signupPassConf"
									name="confirmPassword"
									onChange={this.handleChange}
								/>
							</div>
                            <button type="submit" className="btn btn-primary">
								Signup
							</button>
						</form>
					</div>
					<div className="card-footer text-muted">
						<p className="small-text">
							If you already have an account, you can login{' '}
							<Link to="/login">here</Link>
						</p>
					</div>
				</div>
			</div>
		);
	}
}
