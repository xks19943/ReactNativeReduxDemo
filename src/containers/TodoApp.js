/**
 * Created by xiaoming on 2018/1/15.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import * as todoActions from '../actions/todoActions';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList';

class TodoApp extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    const { todoList, actions, state} = this.props;
    return(
      <TodoList
        todoList = {todoList}
        state={state}
        {...actions}/>
    )
  }
}

/*根据对应的状态显示列表*/
const getVisibleTodoList = (todoList, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todoList.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todoList.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todoList
  }
};

/*将状态转换为属性*/


const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(todoActions.toggleTodo(id))
    }
  }
};


//读取status
const readStatus = state => ({
  state:state.todoReducers,
  todoList:getVisibleTodoList(state.todoReducers.todoList, state.todoReducers.visibilityFilter)
});

//使用 dispatch 把每个 action creator 包围起来，这样可以直接调用它们
const dispatchAction = (dispatch) => ({
  actions:bindActionCreators(todoActions,dispatch)
});

//任何一个从 connect() 包装好的组件都可以得到一个 dispatch 方法作为组件的 props，以及得到全局 state 中所需的任何内容
export default connect(
  readStatus,
  dispatchAction
)(TodoApp);

