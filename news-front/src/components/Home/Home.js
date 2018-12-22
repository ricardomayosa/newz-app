import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
            feedName: 'Today\'s News',
			articles: [],
			feeds: [],
		};
	}
	componentWillMount = () => {
		axios
			.get(
				`https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&apiKey=d0185563574d45c595972d4fe6ac9cd0`,
			)
			.then(res => {
				const articles = res.data.articles;

				this.setState({ articles });
			});
		if (localStorage.getItem('user')) {
			const user = JSON.parse(localStorage.getItem('user'));
			console.log(user._id);
			axios
				.get(`http://localhost:3000/api/feed`, user._id)
				.then(res => {
					// console.log('funciono', res.data.feeds);

					const feeds = res.data.feeds;
					console.log();
					this.setState({ feeds });
				})
				.catch(err => {
					console.log('Error Getting Feeds =====> ', err.response);
				});
		}
    };

    getTodayNews() {
        axios
			.get(
				`https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&apiKey=d0185563574d45c595972d4fe6ac9cd0`,
			)
			.then(res => {
                const articles = res.data.articles;
                const feedName = 'Today\'s News'
                this.setState({ articles });
                this.setState({feedName})
                
			});
    }
    
    getNewArticles(feedInfo) {
        const baseUrl = 'https://newsapi.org/v2/everything/?apiKey=d0185563574d45c595972d4fe6ac9cd0';
        console.log(feedInfo);

        var query = feedInfo.q.join('+');
        
        var url = `${baseUrl}&language=${feedInfo.language}&q=${query}&sortBy=${feedInfo.sortBy}`
        axios
			.get(url)
			.then(res => {
                const articles = res.data.articles;
                const feedName = feedInfo.name
                this.setState({ articles });
                this.setState({feedName})
			});
        console.log(url);
    }

	render() {
		let user = JSON.parse(localStorage.getItem('user'));

		return (
			<div>
				{user ? (
					<div>
						<div className="dropdown">
							<button
								className="btn btn-secondary dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								My Feeds
							</button>
							<div
								className="dropdown-menu"
								aria-labelledby="dropdownMenuButton"
							>
								<p className="dropdown-item" onClick={()=>this.getTodayNews()}>
									Today's News
								</p>
                                <div className="dropdown-divider"></div>
								{this.state.feeds.map((feed, index) => (
									<p key={index} className="dropdown-item" onClick={()=>this.getNewArticles(feed)}>
										{feed.name}
									</p>
								))}
							</div>
						</div>
						<Link to="/newFeed">
							<button>Create new Feed</button>
						</Link>
					</div>
				) : (
					<Link to="/signup">
						<button>
							Sign Up to create your own personalized Feeds!
						</button>
					</Link>
				)}

				<h1>{this.state.feedName}</h1>
				<ul className="list-group">
					{this.state.articles.map((article, index) => (
						<li className="list-group-item text-left" key={index}>
							<div className="card">
								{article.urlToImage ? (
									<img
										src={article.urlToImage}
										alt="No hay foto"
										width="100"
										height="100"
									/>
								) : (
									'no hay foto'
								)}

								<div className="card-body flex-row flex-wrap">
									<h5 className="card-title">
										{article.title}
									</h5>
									<h6 className="card-subtitle mb-2 text-muted">
										{article.author} - {article.source.name}{' '}
										- {article.publishedAt}
									</h6>
									<p className="card-text">
										{article.description}
									</p>
									<a
										target="_blank"
										rel="noopener noreferrer"
										href={article.url}
										className="card-link"
									>
										Source
									</a>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
