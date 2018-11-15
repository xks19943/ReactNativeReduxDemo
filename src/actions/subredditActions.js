/**
 * Created by xiaoming on 2018/1/16.
 */

import * as types from './actionTypes';


/*选择板块*/
export function selectSubreddit(subreddit) {
  return {
    type: types.SELECT_SUBREDDIT,
    subreddit
  }
}

/*刷新板块*/
export function invalidatesubreddit(subreddit) {
  return {
    type: types.INVALIDATE_SUBREDDIT,
    subreddit
  }
}

/*获取指定的帖子*/
export function requestPosts(subreddit) {
  return {
    type: types.REQUEST_POSTS,
    subreddit
  }
}

/*接收帖子*/
export function receivePosts(subreddit, json) {
  return {
    type: types.RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}
