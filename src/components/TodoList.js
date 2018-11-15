/**
 * Created by xiaoming on 2018/1/15.
 */
import React,{Component} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';

import TodoItem from './TodoItem';
import { VisibilityFilters } from '../actions/todoActions';

export default class TodoList extends Component{
  constructor(props){
    super(props);
  }
  todoList = [
    {
      text: '嘻嘻',
      completed: true
    },
    {
      text: '哈哈',
      completed: false
    }
    ];

  render(){
    const { todoList,toggleTodo,state,setVisibilityFilter} = this.props;
    return(
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={{paddingBottom:80}}
          data={todoList}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={()=>this.renderItemSeparatorComponent()}
          renderItem={({item,index}) =>
            <TodoItem
              text={item.text}
              completed={item.completed}
              onClick={()=>toggleTodo(index)}/>
          }/>
        {this.renderMenuView(state,setVisibilityFilter)}
      </View>
    )
  }

  renderItemSeparatorComponent() {
    return(
      <View style={{height:8,backgroundColor:'#F5FCFF'}}/>
    )
  }

  renderMenuView(state,setVisibilityFilter) {
    let title = '';
    if(state.visibilityFilter === VisibilityFilters.SHOW_ALL){
      title = '显示全部';
    }else if(state.visibilityFilter === VisibilityFilters.SHOW_ACTIVE){
      title = '显示进行中';
    }else {
      title = '显示已完成';
    }
    return(
      <View style={styles.menu}>
        <View style={styles.item}>
          <Text style={styles.title}>当前显示：</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={[styles.item,{justifyContent:'space-around'}]}>
          <TouchableOpacity
            onPress={()=>setVisibilityFilter(VisibilityFilters.SHOW_ALL)}
            disabled={state.visibilityFilter === VisibilityFilters.SHOW_ALL}>
            <Text style={[styles.title,
              state.visibilityFilter === VisibilityFilters.SHOW_ALL && {textDecorationLine:'line-through'}]}>
              {'显示全部'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE)}
            disabled={state.visibilityFilter === VisibilityFilters.SHOW_ACTIVE}>
            <Text style={[styles.title,
              state.visibilityFilter === VisibilityFilters.SHOW_ACTIVE && {textDecorationLine:'line-through'}]}>
              {'显示进行中'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)}
            disabled={state.visibilityFilter === VisibilityFilters.SHOW_COMPLETED}>
            <Text style={[styles.title,
              state.visibilityFilter === VisibilityFilters.SHOW_COMPLETED && {textDecorationLine:'line-through'}]}>
              {'显示已完成'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  menu:{
    position:'absolute',
    backgroundColor:'#fff',
    bottom:0,
    left:0,
    right:0
  },
  item:{
    flexDirection:'row',
    paddingHorizontal:16,
    alignItems:'center',
    paddingVertical:10,
  },
  title:{
    fontSize:16,
  }
});