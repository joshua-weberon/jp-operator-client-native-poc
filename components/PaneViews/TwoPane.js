import React, {useState, memo} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Pane from './Pane';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
    backgroundColor: 'blue',
    alignItems: 'center'
  },
  widePane: {
    width: '66%',
    backgroundColor: 'grey'
  },
  pane: {
    width: '33%',
    backgroundColor: 'grey'
  }
})

const ViewOne = memo(({changeView, view}) => {
  return (
    <View style={styles.container}>
      <View style={styles.pane}>
        <Pane changeView={changeView} viewNumber={1} isSelected={view == 1} />
      </View>
      <View style={styles.widePane}>
        <Pane changeView={changeView} viewNumber={2} isSelected={view == 2} />
      </View>
  </View>
  )
  
})

const ViewTwo = memo(({changeView, view}) => {
  return (
    <View style={styles.container}>
      <View style={styles.widePane}>
        <Pane changeView={changeView} viewNumber={2} isSelected={view == 2} />
      </View>
      <View style={styles.pane}>
        <Pane changeView={changeView} viewNumber={3} isSelected={view == 3} />
      </View>
      
  </View>
  )
  
})

const TwoPane = ({changeView, view}) => {
  if(view ==1 || view == 2){
    return <ViewOne changeView={changeView} view={view} />
  } else {
    return <ViewTwo changeView={changeView} view={view} />
  }
}

export default TwoPane;