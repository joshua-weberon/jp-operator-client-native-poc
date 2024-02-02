import React from "react";
import { StyleSheet } from "react-native";

const testStyle = StyleSheet.create({
  test: {
    alignContent: "flex-start",
    alignItems: "center",
  },
});

export const styles = StyleSheet.create({
  chatContainer: {
    // display: 'flex',
    // flexDirection: 'column',
    backgroundColor: "rgb(229 231 235)",
    flex: 1,
    width: "100%",
    
    padding: 5,
    // height: "85%",
    maxHeight: "100%"
  },
  scrollableWeb: {
    flex: 1,
    overflowY: "scroll",
  },
  chatMessageRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
  },
  sameMsgBy: {
    marginTop: 1.6,
  },
  justifyFlexEnd: {
    justifyContent: "flex-end",
  },
  justifyFlexStart: {
    justifyContent: "flex-start",
  },

  msgAvatarContainer: {
    maxWidth: "80%",
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },

  messageContainer: {
    display: "flex",
    flexDirection: "column",
    // width: "fit-content",
    padding: 8,
  },

  max80Wdith: {
    maxWidth: "80%",
  },
  agentBg: {
    // Styles for agent background
    backgroundColor: "aquamarine",
    //boxShadow: "0px 0px 0px 1px lightgrey"
  },
  agentMsgText: {
    color: "black",
  },
  agentTimeText: {
    color: "blue"
  },
  operatorBg: {
    // Styles for Operator background
    backgroundColor: "dodgerblue",
    //boxShadow: "0px 0px 0px 1px lightgrey"
  },
  operatorMsgText: {
    color: "white",
  },
  operatorTimeText: {
    color: "gold"
  },
  customerBg: {
    // Styles for Customer background
    backgroundColor: "white",
    //boxShadow: "0px 0px 0px 1px lightgrey"
  },
  customerMsgText: {
    color: "black",
  },
  customerTimeText: {
    color: "slategray"
  },
  leftFloatMessage: {
    // Styles for left floating message
    // cssFloat: "left",

    textAlign: "left",
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 12,
  },
  rightFloatMessage: {
    // Styles for right floating message
    // cssFloat: "right",
    textAlign: "right",

    //borderRadius: "12 0 0.5rem 0.5rem"
    borderRadius: 8,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 12,
  },
  textContent: {
    // Styles for quick reply title
    fontWeight: 400,
    fontSize: 2,
    lineHeight: 1.75,
  },
  quickReplies: {
    // Styles for quick replies container
    fontWeight: 400,
    fontSize: 2,
    lineHeight: 1.75,
    textAlign: "justify",
    display: "flex",
    flexDirection: "row",
    gap: 2,
    flexWrap: "wrap",
  },
  quickRepliesLeft: {
    // cssFloat: "left",
    justifyContent: "flex-start",
  },
  quickRepliesRight: {
    // Styles for right aligned quick replies
    // cssFloat: "right",
    justifyContent: "flex-end",
  },
  quickReply: {
    // Styles for each quick reply
    padding: 2,
    borderRadius: 2,
  },
  operatorQuickReply: {
    backgroundColor: "blue",
    color: "white",
  },
  customerQuickReply: {
    backgroundColor: "grey",
    color: "white",
  },
  agentQuickReply: {
    // Styles for agent quick reply
    backgroundColor: "rgb(6 78 59)",
    color: "white",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // width: "fit-content",
    padding: 7.2,
    fontSize: 28.8,
  },
  msgContain: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  msgTextLeft: {
    textAlign: "left",
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  msgTextRight: {
    textAlign: "right",
    justifyContent: "flex-end",
    alignContent: "flex-end",
  },
  msgText: {
    fontWeight: 400,
    fontSize: 15,
    // lineHeight: 1.75,
  },
  timeText: {
    fontSize: 10,
    fontWeight: 600,
    // lineHeight: 1.75,
  },
  msgContainLeft: {
    justifyContent: "flex-start",
  },
  msgContainRight: {
    justifyContent: "flex-end",
  },
});

export const AGENT_STYLES = {
  quickReplyAlign: styles.quickRepliesRight,
  quickReply: styles.agentQuickReply,
  rowAlign: styles.justifyFlexEnd,
  bg: styles.agentBg,
  floatMsg: styles.rightFloatMessage,
  msgText: styles.agentMsgText,
  timeText: styles.agentTimeText
};

export const OPERATOR_STYLES = {
  ...AGENT_STYLES,
  bg: styles.operatorBg,
  quickReply: styles.operatorQuickReply,
  msgText: styles.operatorMsgText,
  timeText: styles.operatorTimeText
};

export const CUSTOMER_STYLES = {
  quickReplyAlign: styles.quickRepliesLeft,
  quickReply: styles.customerQuickReply,
  rowAlign: styles.justifyFlexStart,
  bg: styles.customerBg,
  floatMsg: styles.leftFloatMessage,
  msgText: styles.customerMsgText,
  timeText: styles.customerTimeText
};

export const MSG_BY_STYLES = {
  agent: AGENT_STYLES,
  operator: OPERATOR_STYLES,
  customer: CUSTOMER_STYLES,
};

export const RIGHT_ALIGN_STYLE = {
  quickReplyAlign: styles.quickRepliesRight,
  rowAlign: styles.justifyFlexEnd,
  floatMsg: styles.rightFloatMessage,
};

export const LEFT_ALIGN_STYLE = {
  quickReplyAlign: styles.quickRepliesLeft,
  rowAlign: styles.justifyFlexStart,
  floatMsg: styles.leftFloatMessage,
};
