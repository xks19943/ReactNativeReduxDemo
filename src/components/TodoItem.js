/**
 * Created by xiaoming on 2018/1/15.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const TodoItem = ({ onClick, completed, text }) => (
  <TouchableOpacity
    onPress={onClick}
    style={styles.item}>
    <Text style={{textDecorationLine: completed ? 'line-through' : 'none',fontSize: 16}}>
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item:{
    backgroundColor:'#fff',
    paddingHorizontal:16,
    paddingVertical:8
  }
});

export default TodoItem;
