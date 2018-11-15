/**
 * Created by xiaoming on 2018/1/15.
 */
import * as types from '../actions/actionTypes';
import { VisibilityFilters } from '../actions/todoActions';

/*定义初始化的状态*/
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todoList: [
    {
      text: '嘻嘻',
      completed: true
    },
    {
      text: '哈哈',
      completed: false
    }
  ]
};

export default function todoApp(state = initialState, action) {
  switch (action.type) {
    /*更改列表的显示状态*/
    case types.SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter:action.filter
      };
    /*新增一个任务列表*/
    case types.ADD_TODO:
      return todoList(state,action);
    /*根据传递过来的列表的index来改变显示还是隐藏任务*/
    case types.TOGGLE_TODO:
      return todoList(state,action);
    default:
      return state
  }
}

/*更新的业务逻辑拆分到一个单独的函数*/
function todoList(state, action) {
  switch (action.type) {
    /*新增一个任务列表*/
    case types.ADD_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            text: action.text,
            completed: false
          }
        ]
      };
    /*根据传递过来的列表的index来改变显示还是隐藏任务*/
    case types.TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo, index) => {
          if (index === action.index) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo
        })
      };
    default:
      return state
  }
}

