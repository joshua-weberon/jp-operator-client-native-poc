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
    width: '100%',
    backgroundColor: 'grey'
  }
})

const OnePane = ({changeView, view}) => {
  return (
    <View style={styles.container}>
      <View style={styles.pane}>
        <Pane changeView={changeView} viewNumber={view} isSelected={true} />
      </View>
    </View>
  )
}

export default OnePane;
