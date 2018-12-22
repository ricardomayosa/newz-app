import React, { Component } from 'react';
import { login } from '../../authService';
import { Link } from 'react-router-dom';

export default class Login extends Component {
	constructor() {
		super();
		this.state = {
			user: {
				username: '',
				password: '',
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
		login(this.state.user, this.props.history);
	};

	render() {
		return (
			<div>
                {/* check if user is logged */}
				<div className="card text-center">
					<div className="card-body">
						<h5 className="card-title">Login</h5>
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

							<button type="submit" className="btn btn-primary">
								Login
							</button>
						</form>
					</div>
					<div className="card-footer text-muted">
						<p className="small-text">
							If you don't have an account yet, you can create
							your account <Link to="/signup">here</Link>
						</p>
					</div>
				</div>
			</div>
		);
	}
}
