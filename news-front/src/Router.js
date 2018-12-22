import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/Signup';
import Profile from './components/Profile/Profile';
import SourcesView from './components/SourceView/SourcesView';
import FeedForm from './components/Feed/FeedForm';

const Router = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/login" component={Login} />
		<Route exact path="/signup" component={SignUp} />
		<Route exact path="/profile" component={Profile} />
        <Route exact path="/sources" component={SourcesView} />
        <Route exact path="/newFeed" component={FeedForm} />
	</Switch>
);

export default Router;
