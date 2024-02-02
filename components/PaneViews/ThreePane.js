import React, {useState} from 'react';
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
  pane: {
    width: '33%',
    backgroundColor: 'grey'
  }
})

const ThreePane = ({changeView, view}) => {
  return (
    <View style={styles.container}>
      <View style={styles.pane}>
        <Pane changeView={changeView} viewNumber={1} isSelected={view == 1} />
      </View>
      <View style={styles.pane}>
        <Pane changeView={changeView} viewNumber={2} isSelected={view == 2} />
      </View>
      <View style={styles.pane}>
        <Pane changeView={changeView} viewNumber={3} isSelected={view == 3} />
      </View>
    </View>
  )
}

export default ThreePane;