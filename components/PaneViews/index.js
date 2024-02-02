import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Pane from './Pane';
import ThreePane from './ThreePane';
import OnePane from './OnePane';
import TwoPane from  './TwoPane';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');



const PaneViews = () => {
  const [view, setView] = useState(1);
  const [info, setInfo] = useState('');
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setDimensions({window, screen});
      },
    );
    return () => subscription?.remove();
  });
  
  const changeView = (nextView) => {
    setInfo(`${view} -> ${nextView}`);
    setView(nextView);
  }
  return (
    <View>
      <Text>Info: {info}</Text>
      <Text>View: {view}</Text>
      {
        dimensions.window.width <= 414 && <OnePane changeView={changeView} view={view} />
      }
      {
        dimensions.window.width > 414 && dimensions.window.width <= 601 && <TwoPane changeView={changeView} view={view} />
      }
      {
        dimensions.window.width > 601 && <ThreePane changeView={changeView} view={view} />
      }      
    </View>
  )
}

export default PaneViews;