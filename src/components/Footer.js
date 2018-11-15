/**
 * Created by xiaoming on 2018/1/15.
 */
import React,{Component,} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import FilterLink from './FilterLink';

const Footer = ()=>{
  return(
    <View>
      Show:
      {' '}
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      {', '}
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
      {', '}
      <FilterLink filter="SHOW_COMPLETED">
        Completed
      </FilterLink>
    </View>
  )
};

export default Footer;