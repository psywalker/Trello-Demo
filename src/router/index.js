import React from 'react';
import { LastLocationProvider } from 'react-router-last-location';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import TaskContainer from '../containers/TaskContainer/TaskContainer';
import BoardsContainer from '../containers/BoardsContainer/BoardsContainer';
import './styles.scss';

const Main = () => (
	<BrowserRouter basename={process.env.PUBLIC_URL || '/'}>
		<LastLocationProvider>
			<div>
				<Switch>
					<Route path="/" exact component={BoardsContainer} />
					<Route path="/task" component={TaskContainer} />
				</Switch>
			</div>
		</LastLocationProvider>
	</BrowserRouter>)

export default Main;
