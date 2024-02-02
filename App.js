
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";

import {store} from './state/store';
import ScrollChat from "./components/Scroll/index";
//import PaneViews from "./components/PaneViews/index"


export default function App() {
  
  /* return (
    <PaneViews />
  ) */
  return (
    <Provider store={store}>
      <ScrollChat />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
