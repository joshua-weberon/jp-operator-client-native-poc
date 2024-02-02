import React, { useLayoutEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from "react-native";
import {
  styles,
  AGENT_STYLES,
  LEFT_ALIGN_STYLE,
  MSG_BY_STYLES,
  OPERATOR_STYLES,
  RIGHT_ALIGN_STYLE,
} from "./styles";
import TextContent from "./TextContent";
//import QuickReplyBody from "./QuickReplyBody";
import Avatar from "./Avatar";
import {useSelector} from 'react-redux';
import {getMessages} from '../../state/chatSlice';

const Content = ({textContent, outerSyles, textStyles, id}) => {
  return (
    <View style={outerSyles || []}>
      <Text style={textStyles || []} testID={id}>{textContent}</Text>
    </View>
  )
}

const Message = ({ msgBy, message, isLeftAligned, id }) => {
  if (message == null) return;
  if (message.quick_replies) {
    return null;
    /* return (
      <QuickReplyBody
        msgBy={msgBy}
        message={message}
        isLeftAligned={isLeftAligned}
      />
    ); */
  }
  const alignTxt = isLeftAligned ? styles.msgTextLeft : styles.msgTextRight;
  const alignMsg = isLeftAligned ? styles.msgContainLeft : styles.msgContainRight;
  const msgText = (MSG_BY_STYLES[msgBy] || {}).msgText || styles.msgText;
  return (
    <Content 
    outerSyles={[styles.msgContain, alignMsg, alignTxt]}
    textStyles={[styles.msgText, alignTxt, msgText]}
    textContent={message} 
    id={id}/>
  )
    /* return (
      <View style={[styles.msgContain, alignMsg, alignTxt]}>
        <Text style={[styles.msgText, alignTxt]}>{message}</Text>
      </View>
    ) */
};

const RightAlignMessage = ({ msgBy, message, lastMsgBy, time, id }) => {
  const styleObj = MSG_BY_STYLES[msgBy] || {};
  const rowStyle = [styles.chatMessageRow, RIGHT_ALIGN_STYLE.rowAlign];
  if (msgBy === lastMsgBy) {
    rowStyle.push(styles.sameMsgBy);
  }
  return (
    <View style={rowStyle} testID={id}>
      <View style={[styles.msgAvatarContainer, RIGHT_ALIGN_STYLE.rowAlign]}>
        <ColumnContent>
          <View
            style={[
              styles.messageContainer,
              styleObj.bg,
              RIGHT_ALIGN_STYLE.floatMsg,
            ]}
          >
            <Message msgBy={msgBy} message={message} isLeftAligned={false} id={`message-${id}`}/>
            <Time msgBy={msgBy} time={time} isLeftAligned={false} id={`time-${id}`}/> 
          </View>
        </ColumnContent>

        <Avatar msgBy={msgBy} id={`avatar-${id}`}/>
      </View>
    </View>
  );
};

const ColumnContent = ({ children }) => {
  return <View style={styles.max80Wdith}>{children}</View>;
};

const Time = ({msgBy, time, isLeftAligned, id}) => {
  const alignTxt = isLeftAligned ? styles.msgTextLeft : styles.msgTextRight;
  const alignMsg = isLeftAligned ? styles.msgContainLeft : styles.msgContainRight;
  const timeText = (MSG_BY_STYLES[msgBy] || {}).timeText || styles.timeText;
  return (
    <Content 
    outerSyles={[styles.msgContain, alignMsg, alignTxt]}
    textStyles={[styles.timeText, alignTxt, timeText]}
    textContent={getTimeString(time)} 
    id={id}/>
  )
}

const LeftAlignMessage = ({ msgBy, message, lastMsgBy, time, id }) => {
  const styleObj = MSG_BY_STYLES[msgBy] || {};
  const rowStyle = [styles.chatMessageRow, LEFT_ALIGN_STYLE.rowAlign];
  if (msgBy === lastMsgBy) {
    rowStyle.push(styles.sameMsgBy);
  }
  return (
    <View style={rowStyle} testID={id}>
      <View style={styles.msgAvatarContainer}>
        <Avatar msgBy={msgBy} id={`avatar-${id}`}/>
        <ColumnContent>
          <View
            style={[
              styles.messageContainer,
              styleObj.bg,
              LEFT_ALIGN_STYLE.floatMsg,
            ]}
          >
            <Message msgBy={msgBy} message={message} isLeftAligned={true} id={`message-${id}`}/>
            <Time msgBy={msgBy} time={time} isLeftAligned={true} id={`time-${id}`}/> 
          </View>
        </ColumnContent>
      </View>
    </View>
  );
};

const ChatMessageRow = ({ messageBy, chatMessage, lastMsgBy, time, id }) => {  
  if (messageBy === "operator" || messageBy === "agent") {
    return (
      <RightAlignMessage
        msgBy={messageBy}
        message={chatMessage}
        lastMsgBy={lastMsgBy}
        time={time}
        id={id}
      />
    );
  } else {
    return (
      <LeftAlignMessage
        msgBy={messageBy}
        message={chatMessage}
        lastMsgBy={lastMsgBy}
        time={time}
        id={id}
      />
    );
  }
};

/* const ChatMessageRow_ = ({messageBy,chatMessage, lastMsgBy}) => {
    return (
      <View>
      <RightAlignMessage msgBy={messageBy} message={chatMessage} lastMsgBy={lastMsgBy} />
      <Text>chatMessage: {JSON.stringify(chatMessage)}</Text>
      </View>
    )
  } */
  
const getTimeString = (time) => {
    if (time == null) return "TIME NA";
    let dt = new Date(Number(time));
    return `${dt.toLocaleDateString()} ${dt.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;
}

const messages = [
  {
    isAgentResponse: true,
    messageBy: 'agent',
    utterance: '1. Getting you help! Please wait',
    time: 1704375110000,
    customerId: 'demoCustomer',
    originalCustomerId: '/customer#demoCustomer',
  },
  {
    isAgentResponse: false,
    messageBy: 'customer',
    utterance: 'ok! I will wait!',
    time: 1704375170000,
    customerId: 'demoCustomer',
    originalCustomerId: '/customer#demoCustomer',
  },
  {
    isAgentResponse: true,
    messageBy: 'agent',
    utterance: '2. Getting you help! Please wait',
    time: 1704375110000,
    customerId: 'demoCustomer',
    originalCustomerId: '/customer#demoCustomer',
  },
  {
    isAgentResponse: false,
    messageBy: 'customer',
    utterance: 'ok! I will wait!',
    time: 1704375170000,
    customerId: 'demoCustomer',
    originalCustomerId: '/customer#demoCustomer',
  },
  {
    isAgentResponse: true,
    messageBy: 'agent',
    utterance: 'Getting you help! Please wait',
    time: 1704375110000,
    customerId: 'demoCustomer',
    originalCustomerId: '/customer#demoCustomer',
  },
  {
    isAgentResponse: false,
    messageBy: 'customer',
    utterance: 'ok! I will wait!',
    time: 1704375170000,
    customerId: 'demoCustomer',
    originalCustomerId: '/customer#demoCustomer',
  },
  {
    isAgentResponse: true,
    messageBy: 'agent',
    utterance: 'Getting you help! Please wait',
    time: 1704375110000,
    customerId: 'demoCustomer',
    originalCustomerId: '/customer#demoCustomer',
  },
  {
    isAgentResponse: false,
    messageBy: 'customer',
    utterance: 'ok! I will wait!',
    time: 1704375170000,
    customerId: 'demoCustomer',
    originalCustomerId: '/customer#demoCustomer',
  },
  {
    isAgentResponse: true,
    messageBy: 'agent',
    utterance: 'Getting you help! Please wait',
    time: 1704375110000,
    customerId: 'demoCustomer',
    originalCustomerId: '/customer#demoCustomer',
  },
  {
    isAgentResponse: false,
    messageBy: 'customer',
    utterance: 'ok! I will wait!',
    time: 1704375170000,
    customerId: 'demoCustomer',
    originalCustomerId: '/customer#demoCustomer',
  },
  {
    isAgentResponse: true,
    messageBy: 'agent',
    utterance: 'Getting you help! Please wait',
    time: 1704375110000,
    customerId: 'demoCustomer',
    originalCustomerId: '/customer#demoCustomer',
  },
  {
    isAgentResponse: false,
    messageBy: 'customer',
    utterance: 'ok! I will wait!',
    time: 1704375170000,
    customerId: 'demoCustomer',
    originalCustomerId: '/customer#demoCustomer',
  },
  {
    isOperator: true,
    messageBy: 'operator',
    utterance: 'This is Special Agent 007, How may I help you? We are getting you there!',
    time: 1704375230000,
    customerId: 'demoCustomer',
    originalCustomerId: '/customer#demoCustomer',
  },
];

/* export const Chat_ = () => {
  return (
    <View style={styles.chatContainer}>
      <Text>Chats</Text>
      {messages.map((msg, i) => (
        <ChatMessageRow key={`msg-${i}`} {...msg} chatMessage={msg.utterance} />
      ))}
    </View>
  );
}; */

const ChatText = ({utterance}) => {
  return (
    <Text>{utterance}</Text>
  )
}

/**

export const Chat = () => {
  return (
    <View style={styles.chatContainer}>
      {messages.map((msg, i) => (
        <ChatMessageRow key={`msg-${i}`} {...msg} chatMessage={msg.utterance} />
      ))}
    </View>
  );
};
 */

const MobileScrollView = () => {
  const msgs = useSelector(getMessages);
  return (
    <View style={styles.chatContainer}>
      <ScrollView
        ref={ref => this.scrollViewRef = ref}
        onContentSizeChange={()=> this.scrollViewRef && this.scrollViewRef.scrollToEnd({animated: true})}  
      >
        {msgs.map((msg, i) => (
          <ChatMessageRow key={`msg-${i}`} {...msg} chatMessage={`${i}-${msg.utterance}`} id={`chat-msg-${i}`}/>
        ))}
      </ScrollView>
    </View>
  );
}

const WebScrollView = () => {
  const scrollViewRef = useRef()
  const msgs = useSelector(getMessages);

  useLayoutEffect(()=>{
    
    if(scrollViewRef != null && scrollViewRef.current != null){
      const container = scrollViewRef.current;
      container.scroll(0, container.scrollHeight);
    }
  })
  return (
    <View style={[styles.chatContainer, styles.scrollableWeb]} ref={scrollViewRef} id="web-chat-container">
      {msgs.map((msg, i) => (
          <ChatMessageRow key={`msg-${i}`} {...msg} chatMessage={`${i}-${msg.utterance}`} id={`chat-msg-${i}`}/>
        ))}
    </View>
  );
}


export const Chat = () => {
  //const scrollViewRef = useRef(null);
  const os = Platform.OS;

  if(os === 'web'){
    return <WebScrollView />
  }else{
    return <MobileScrollView />
  }
};

export default ChatMessageRow;
