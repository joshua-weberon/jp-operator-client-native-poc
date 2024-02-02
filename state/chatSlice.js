import { createSlice } from '@reduxjs/toolkit';
import {messages as demoMessages} from './demoData'

const initialState = {
  messages: demoMessages,
};

/*
{
        isAgentResponse: true,
        messageBy: 'agent',
        utterance: 'Getting you help! Please wait',
        time: 1704375110000,
        customerId: 'demoCustomer',
        originalCustomerId: '/customer#demoCustomer'
      },
      {
        isAgentResponse: false,
        messageBy: 'customer',
        utterance: 'ok! I will wait!',
        time: 1704375170000,
        customerId: 'demoCustomer',
        originalCustomerId: '/customer#demoCustomer'
      },
      {
        isOperator: true,
        messageBy: 'operator',
        utterance: 'This is Special Agent 007, How may I help you?',
        time: 1704375230000,
        customerId: 'demoCustomer',
        originalCustomerId: '/customer#demoCustomer'
      },
*/

const slice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    addMessage(state, action){
      const {utterance, by, customerId} = action.payload;
      const time = new Date().getTime();
      const message = {
        isAgentResponse: by === 'agent',
        isOperator: by === 'operator',
        messageBy: by,
        utterance,
        time,
        customerId,
        originalCustomerId: `/customer#${customerId}`
      }
      state.messages = [...state.messages, message];
    } 
  }
});

export const getMessages = (state) => {
  const customerId = state.selectedCustomer.customerId;
  return state.chats.messages && state.chats.messages[customerId];
}

export const {addMessage} = slice.actions;

export default slice.reducer;
//messages selectedCustomer