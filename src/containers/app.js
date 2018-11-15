import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import CounterApp from './counterApp';
import TodoApp from './TodoApp';
import AppWithNavigationState from '../navigator/AppNavigator';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
/*组织多个reducer*/
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);
//const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState/>
      </Provider>
    );
  }
}
