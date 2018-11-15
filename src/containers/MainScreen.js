/**
 * Created by xiaoming on 2018/1/19.
 */
import React,{Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

const MainScreen = ({navigation,onClick})=>{
  return(
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.container}>
        <MenuItem
          navigation={navigation}
          onClick={onClick}/>
      </ScrollView>
    </View>
  )
};

MainScreen.propTypes = {
  onClick: PropTypes.func.isRequired,
};

MainScreen.navigationOptions = {
  title: 'Main Screen',
};


const mapStateToProps = state => {
  return(
    state: state
  )
};

const mapDispatchToProps = dispatch => ({
  onClick: (name) => dispatch({ type: 'onPress',name: name})
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);



const menu = [
  'counter',
  'todo',
];

const MenuItem = ({onClick})=>{
  return menu.map((m,index)=>{
    return(
      <TouchableOpacity
        onPress={()=>onClick(m)}
        style={styles.menu}
        key={index}>
        <Text>
          {m}
        </Text>
      </TouchableOpacity>
    )
  });
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#f2f2f2'
  },
  menu:{
    padding:16,
    marginBottom:8
  }
});