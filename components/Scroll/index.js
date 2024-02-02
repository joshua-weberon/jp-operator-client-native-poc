import React from 'react';
import {StyleSheet, View, Text, ScrollView, Platform} from 'react-native';
import {Chat} from '../chatRow3/index'

//import {Chat} from './components/chatRow2/index';

const headerStyle = StyleSheet.create({
  header: {
    display: 'flex',
    padding: 5,
    backgroundColor: 'orange',
    
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    //fontWeight: 400,
  }
})

const Header = () => {
  const os = Platform.OS;
  return (
    <View style={headerStyle.header}>
      <Text style={headerStyle.text}>os: {os}</Text>
    </View>
  )
}

const footerStyle = StyleSheet.create({
  footer: {
    display: 'flex',
    padding: 5,
    backgroundColor: 'green',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    //fontWeight: 400,
    color: 'white',
  }
})

const Footer = () => {
  return (
    <View style={footerStyle.footer}>
      <Text style={footerStyle.text}>Footer</Text>
    </View>
  )
}

const bodyStyle = StyleSheet.create({
  body: {
    display: 'flex',
    padding: 0,
    backgroundColor: 'blue',
    alignItems: 'center',
    // height: "82%"
    flex: 1,
    height: "100%"
  },
  text: {
    fontSize: 25,
    //fontWeight: 400,
    color: 'white',
  }
})

const Body = () => {
  /* return (
    <View style={bodyStyle.body} id="chat-body">
      <Chat/>
    </View>
  ) */
  return <Chat/>
}

const scrollStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    justifyContent: 'space-between',
    height: "100%",
    flex: 1,
    width: "99.99%",
    maxHeight: "100vh",
    paddingTop: 20
    // maxHeight: "100%"
  },
  text: {
    fontSize: 25,
    //fontWeight: 400,
  }
})

const ScrollChat = () => {
  return (
    <View style={scrollStyle.container}>
      <Header/>
      <Body />
      <Footer/>
    </View>
  )
}

export default ScrollChat;