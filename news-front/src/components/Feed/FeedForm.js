import React, { Component } from 'react';
import { createFeed } from '../../feedService';

import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

export default class FeedForm extends Component {
	constructor() {
		super();
		this.state = {
			user: {},
			tags: [],
			feed: {
				user: '',
				name: '',
				q: [],
				language: 'en',
				sortBy: 'publishedAt',
			},
		};
	}
	componentWillMount() {
		//console.log(localStorage.getItem('user'))
		if (localStorage.getItem('user') === null) {
			this.props.history.push('/');
		} else {
			const user = JSON.parse(localStorage.getItem('user'));
			this.setState({ user });
			// console.log(user);
		}
	}
	handleChange = e => {
		const { feed } = this.state;

		feed.user = this.state.user._id;
		let field = e.target.name;
		feed[field] = e.target.value;
		this.setState({ feed });

		console.log(this.state);
	};
	handleChangeTags = tags => {
		this.setState({ tags });

		// console.log(this.state.tags)

		// const { tags } = this.state;
		// this.setState({tags});
	};

	handleSubmit = e => {
		e.preventDefault();

        // console.log('TAGS', this.state.tags);
        
		// let feed = Object.assign({}, this.state.feed); //creating copy of object
        // feed.q = this.state.tags; //updating value
        // console.log('COPIA DEL FEED', feed);
        // this.setState( {feed} );

        // var tags = this.state.tags;
        
        // this.setState({...this.state.feed, q: tags});
        let {feed} = this.state
        let {tags}=this.state
        tags.forEach(tag => {
            feed.q.push(tag);
        });
        // feed.q.push(tags)
        

		//this.state.feed.q = this.state.tags;
		console.log(this.state);
		createFeed(this.state.feed, this.props.history);
	};
	render() {
		// check if user is logged
		return (
			<div>
				<div className="card text-center">
					<div className="card-body">
						<h5 className="card-title">New Feed</h5>
						<form
							className="text-left"
							onSubmit={this.handleSubmit}
						>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">
									Name of your new feed
								</label>
								<input
									type="text"
									className="form-control"
									id="feedName"
									aria-describedby="feedName"
									name="name"
									onChange={this.handleChange}
								/>
								<small
									id="emailHelp"
									className="form-text text-muted"
								>
									Add an unique identifier for your Feed
								</small>
							</div>
							
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">
									Query
								</label>
								<TagsInput
									value={this.state.tags}
									name="q"
									onChange={this.handleChangeTags}
								/>
                                <small
									id="smallFeedQuery"
									className="form-text text-muted"
								>
									Add a tag and press enter to filter your news
								</small>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">
									Language
								</label>
								<select
									className="form-control"
									id="feedLang"
									name="language"
									defaultValue="en"
									onChange={this.handleChange}
								>
									<option value="ar">Arabic</option>
									<option value="de">German</option>
									<option value="en">English</option>
									<option value="es">Spanish</option>
									<option value="fr">French</option>
									<option value="he">Hebrew</option>
									<option value="it">Italian</option>
									<option value="nl">Dutch</option>
									<option value="no">Norwegian</option>
									<option value="pt">Portuguese</option>
									<option value="ru">Russian</option>
									<option value="zh">Chinese</option>
								</select>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">
									Sort your news by
								</label>
								<select
									className="form-control"
									id="feedSort"
									name="sortBy"
									defaultValue="publishedAt"
									onChange={this.handleChange}
								>
									<option value="relevancy">Relevance</option>
									<option value="popularity">
										Popularity
									</option>
									<option value="publishedAt">
										Publishing Date
									</option>
								</select>
							</div>
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</form>
					</div>
					{/* <div className="card-footer text-muted">
						<p className="small-text">
							If you already have an account, you can login <Link to="/login">here</Link>
						</p>
					</div> */}
				</div>
			</div>
		);
	}
}
