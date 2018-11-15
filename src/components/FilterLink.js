/**
 * Created by xiaoming on 2018/1/15.
 */
import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const FilterLink = ({filter})=>{
  return(
    <TouchableOpacity>
      {filter}
    </TouchableOpacity>
  )
};

export default FilterLink