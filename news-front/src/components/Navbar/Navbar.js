import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	logout = () => {
		//console.log('Logout')
		localStorage.clear();
		// console.log(this.props);
		// return this.context.history.push('/');
		window.location.reload();
	};

	render() {
		let user = JSON.parse(localStorage.getItem('user'));

		return (
			<div className="navbar navbar-expand-lg navbar-fixed-top navbar-light bg-light">
				<nav className="container">
					<Link className="navbar-brand" to="/">
						<strong>NEWS</strong>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link className="nav-link" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/sources">
									Sources
								</Link>
							</li>
							{user ? (
								<div>
									<li className="nav-item dropdown">
										<Link
											className="nav-link dropdown-toggle"
											to="."
											id="navbarDropdown"
											role="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										>
											{user.username}
										</Link>

										<div
											className="dropdown-menu"
											aria-labelledby="navbarDropdown"
										>
											<Link
												className="dropdown-item"
												to="/profile"
											>
												Profile
											</Link>
                                            <div className="dropdown-divider"></div>
											<Link
												className="dropdown-item"
                                                onClick={this.logout}
                                                to="."
											>
												Logout
											</Link>
										</div>
										{/* <a className="nav-link" href="/login">
                                            {user.username}
                                        </a> */}
									</li>
								</div>
							) : (
								<li className="nav-item">
									<Link className="nav-link" to="/login">
										Login
									</Link>
								</li>
							)}
						</ul>
						{/* <form className="form-inline my-2 my-lg-0">

                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                        </form> */}
					</div>
				</nav>
			</div>
		);
	}
}
