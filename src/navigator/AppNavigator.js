/**
 * Created by xiaoming on 2018/1/19.
 */
import React from 'react';
import { StackNavigator,addNavigationHelpers} from 'react-navigation'
import MainScreen from '../containers/MainScreen';
import counterApp from '../containers/counterApp';
import TodoApp from '../containers/TodoApp';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

export const AppNavigator = StackNavigator({
  Main: { screen: MainScreen },
  counter: { screen: counterApp},
  todo: { screen: TodoApp}
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return{
    nav: state.appReducers.nav,
  }
};

export default connect(mapStateToProps)(AppWithNavigationState);