import React, { Component } from 'react';
import PageQuestions from './components/PageQuestions';
import PageResult from './components/PageResult';
import {Provider} from 'react-redux';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import store from './store';
import './style.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/result' component={PageResult} />
            <Route path='/' component={PageQuestions} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
