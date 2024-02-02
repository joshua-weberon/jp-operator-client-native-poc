import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  
  pane: {
    flex: 1,
    width: "100%",
    flexDirection: 'column',
    gap: 5
  }
})

const Pane = ({viewNumber, changeView, isSelected}) => {
  return (
    <View style={styles.pane}>
       <Text>{viewNumber}: isSelected: {isSelected == true ? 'T' : 'F'}</Text>
      <Button onPress={() => changeView(1)} title="Goto Pane 1"></Button>
      <Button onPress={() => changeView(2)} title="Goto Pane 2"></Button>
      <Button onPress={() => changeView(3)} title="Goto Pane 3"></Button>
      
    </View>
  )
}

export default Pane;