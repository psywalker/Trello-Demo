import React from 'react';
import { LastLocationProvider } from 'react-router-last-location';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Task from '../containers/Task/Task';
import Board from '../containers/Board/Board';
import Page404 from '../components/Page404/Page404';
import './styles.scss';

const Main = () => (
	<BrowserRouter basename={process.env.PUBLIC_URL || '/'}>
		<LastLocationProvider>
			<div>
				<Switch>
					<Route path="/" exact component={Board} />
					<Route path="/task/:id" component={Task} />
					<Route path="*" component={Page404} />
				</Switch>
			</div>
		</LastLocationProvider>
	</BrowserRouter>)

export default Main;

