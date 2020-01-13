import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import HomePage from '../Pages/HomePage/HomePage';
import PostPage from '../Pages/PostPage/PostPage';
import NotFoundPage from '../Pages/NotFoundPage';

export default function AppRouter() {
	return (
		<Layout>
			<Layout.Header >
				<div className="Header">
					<h2>React GraphQL Blog</h2>
				</div>
			</Layout.Header>
			<Layout.Content className="ContentWrapper">
				<Router>
					<Switch>
						<Route path={"/"} exact component={HomePage} />
						<Route path={"/post/:id"} exact component={PostPage} />
						<Route component={NotFoundPage} />
					</Switch>
				</Router>
			</Layout.Content>
		</Layout>
	)
}
