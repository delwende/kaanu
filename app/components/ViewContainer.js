'use strict'

import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

class ViewContainer extends Component{
  render(){
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

module.exports = ViewContainer
