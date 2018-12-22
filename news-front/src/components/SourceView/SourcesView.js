import React, { Component } from 'react'
import axios from 'axios';

export default class SourcesView extends Component {
    constructor() {
		super();
		this.state = {
			sources: [],
		};
	}
	componentWillMount = () => {
		axios
			.get(
				`https://newsapi.org/v2/sources?apiKey=d0185563574d45c595972d4fe6ac9cd0`,
			)
			.then(res => {
				const sources = res.data.sources;

				this.setState({ sources });
				console.log(res.data.sources);
			});
	};
  render() {
    return (
      <div>
        <h1>Sources</h1>
        <ul>
            {this.state.sources.map((source, index) => (
                <li key={index}>-{source.name}</li>
            ))}
        </ul>
      </div>
    )
  }
}
