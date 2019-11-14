import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={MovieList} />
            <Route path="/:id" component={MovieDetails} />
        </Switch>
    </Router>
);

export default App;
