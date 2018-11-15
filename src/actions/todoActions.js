/**
 * Created by xiaoming on 2018/1/15.
 */
import * as types from './actionTypes';

/*
 * 其它的常量
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action 创建函数
 */
export function addTodo(text) {
  return { type: types.ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: types.TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: types.SET_VISIBILITY_FILTER, filter }
}