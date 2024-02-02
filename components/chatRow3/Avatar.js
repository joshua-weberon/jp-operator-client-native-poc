import React from 'react';
import { View, Text } from 'react-native';
import {styles, MSG_BY_STYLES} from './styles';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
// import { faHeadset, faRobot, faUser } from '@fortawesome/free-solid-svg-icons';

const OperatorAvatar = ({id}) => {
  const styleObj = MSG_BY_STYLES.operator;
  return (
    <View style={[styles.avatar, styleObj.bg]}>
       <Text testID={id}>O</Text>
    </View>
  )
}

/*
<FontAwesomeIcon icon="fa-solid fa-headset" />
 <FontAwesomeIcon icon="fa-solid fa-headset" />
*/
const AgentAvatar = ({id}) => {
  const styleObj = MSG_BY_STYLES.agent;
  return (
    <View style={[styles.avatar, styleObj.bg]}>
       <Text testID={id}>A</Text>
    </View>
  )
}

const CustomerAvatar = ({id}) => {
  const styleObj = MSG_BY_STYLES.customer;
  return (
    <View style={[styles.avatar, styleObj.bg]}>
       <Text testID={id}>C</Text>
    </View>
  )
}

const Avatar = ({msgBy, id}) => {
  if(msgBy === "operator")return <OperatorAvatar id={id}/>
  else if(msgBy === "agent")return <AgentAvatar id={id}/>
  else return <CustomerAvatar id={id}/>
}

export default Avatar;